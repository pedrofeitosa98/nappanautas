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
  djusername: string // Default: No DJ
  history: string[]
  title: string
  listeners: string
  ulistener: string
}

export interface IStreamContext {
  // streamData: IStreamData | null
  streamInfos: IStreamInfos | null
  toggleAudio: (action: 'play' | 'pause') => void
  loadingListeners: boolean
  getRadioData: () => Promise<void>
}

export interface IStreamProviderProps {
  children: React.ReactNode
}
