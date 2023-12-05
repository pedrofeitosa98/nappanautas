export type DJs = 'No DJ' | 'Motivo' | 'Raro'

export const djshow = (djusername: DJs) => {
  switch (djusername) {
    case 'No DJ':
      return 'Jukebox AutoDJ'
    case 'Motivo':
      return 'Frequência Máxima'
  }
}
