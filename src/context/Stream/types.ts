import { DJs } from '@/utils/djshow'

export interface IStreamData {
  currentlisteners: 1
  uniquelisteners: 1
  servergenre: string // Programação
  servertitle: string // Locutor
  songtitle: string
  streamstatus: 1
}

export interface IStreamInfos {
  art: string
  bitrate: string
  djprofile: string
  djusername: DJs // Default: No DJ
  history: string[]
  title: string
  listeners: string
  ulistener: string
}

export interface IStreamContext {
  // streamData: IStreamData | null
  streamInfos: IStreamInfos | null
  toggleAudio: (action: 'play' | 'pause') => void
  loadingPlayerData: boolean
  updateRadioData: () => Promise<void>
}

export interface IStreamProviderProps {
  children: React.ReactNode
}
