import * as React from 'react'
import {SmashingThemeModifier, createTheme} from '@smashing/theme'

export const darkTheme = createTheme({
  colors: {
    heading: {
      muted: '#7887A0',
      default: '#FFFFFF'
    },
    text: {
      muted: '#7887A0',
      default: '#CDD4E3',
      intense: '#FFFFFF',
      success: '#00E074',
      warning: '#E88C32',
      danger: '#FF3730',
      info: '#2998FF'
    }
  }
})

export const DarkTheme: React.FC<{children: any}> = ({children}) => (
  <SmashingThemeModifier theme={darkTheme}>{children}</SmashingThemeModifier>
)
