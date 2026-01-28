declare module 'react-chrono' {
  export interface TimelineItemModel {
    title?: string
    cardTitle?: string
    cardSubtitle?: string
    cardDetailedText?: string | string[]
    media?: {
      type: 'IMAGE' | 'VIDEO'
      source: {
        url: string
      }
    }
  }

  export interface ChronoProps {
    items?: TimelineItemModel[]
    mode?: 'HORIZONTAL' | 'VERTICAL' | 'VERTICAL_ALTERNATING' | 'HORIZONTAL_ALL'
    cardHeight?: number
    darkMode?: boolean
    scrollable?: boolean
    theme?: {
      primary?: string
      secondary?: string
      cardBgColor?: string
      titleColor?: string
      titleColorActive?: string
    }
  }

  export const Chrono: React.FC<ChronoProps>
}
