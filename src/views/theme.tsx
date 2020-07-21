import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    green: string;
    yellow: string;
    orange: string;
    red: string;
    purple: string;
    brown: string;
    lightGreen: string;
    lightYellow: string;
    lightOrange: string;
    lightRed: string;
    lightPurple: string;
    lightBrown: string;
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      btn: any
    }
  }
  
  interface ThemeOptions {
    custom?: {
      btn?: any
    }
  }
}

const customGreen = '#009865'
const customYellow = '#fffb26'
const customOrange = '#ff9835'
const customRed = '#ca0034'
const customPurple = '#670099'
const customBrown = '#7e0123'
const customLightGreen = '#e5f4ef'
const customLightYellow = '#ffffea'
const customLightOrange = '#fef4ea'
const customLightRed = '#fae5ea'
const customLightPurple = '#f0e5f5'
const customLightBrown = '#f1e5e9'

const theme = createMuiTheme({
  palette: {
    common: {
      green: customGreen,
      yellow: customYellow,
      orange: customOrange,
      red: customRed,
      purple: customPurple,
      brown: customBrown,
      lightGreen: customLightGreen,
      lightYellow: customLightYellow,
      lightOrange: customLightOrange,
      lightRed: customLightRed,
      lightPurple: customLightPurple,
      lightBrown: customLightBrown
    }
  },
  custom: {
    btn: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      borderRadius: '999px',
      border: 0,
      fontWeight: 'bold',
      fontSize: '2rem',
    }
  },
  typography: {
    "fontFamily": `"Noto Sans TC", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
})

export default theme