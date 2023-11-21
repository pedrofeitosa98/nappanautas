import radioAPI from '@/services/radioAPI'
import { useState, createContext, useEffect, useContext } from 'react'
import {
  IStreamContext,
  IStreamData,
  IStreamInfos,
  IStreamProviderProps
} from './types'

export const StreamContext = createContext<IStreamContext>({} as IStreamContext)

export function StreamProvider({ children }: IStreamProviderProps) {
  const [loadingListeners, setLoadingListeners] = useState(true)
  const [streamInfos, setStreamInfos] = useState<IStreamInfos | null>(null)
  const [playerRef, setPlayerRef] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const player = document.querySelector('audio')
    setPlayerRef(player)
  }, [])

  function toggleAudio(action: 'play' | 'pause') {
    if (playerRef) {
      if (action === 'play') {
        if (playerRef.paused) {
          playerRef.play()
        } else {
          playerRef.volume = 1.0
        }
      } else if (action === 'pause') {
        playerRef.volume = 0.0
      }
    }
  }

  const getRadioData = async () => {
    try {
      setLoadingListeners(true)
      // const { data } = await radioAPI().get(':7017/statistics?json=1')
      const response = await radioAPI.get('/cp/get_info.php?p=8034')
      setStreamInfos(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingListeners(false)
    }
  }

  useEffect(() => {
    getRadioData()

    const interval = setInterval(() => getRadioData(), 60 * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <StreamContext.Provider
      value={{
        streamInfos,
        toggleAudio,
        loadingListeners,
        getRadioData
      }}
    >
      {children}
    </StreamContext.Provider>
  )
}
