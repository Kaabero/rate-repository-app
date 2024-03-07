import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      appBar: '#ffffff',
      button: '#ffffff'
    },
    backroundColors: {
        appBar:'#24292e',
        languageTag:'#0366d6',
        mainBackground: '#e1e4e8' 
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      appBar: 30,
    },
    fonts: {
      main: Platform.select({
        anroid: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    margins: {
        marginVertical: 8,
    }
  };
  
  export default theme;