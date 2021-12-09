import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
          "Space Grotesk",
        ].join(','),
      },
    overrides: {
    MuiCssBaseline: {
        '@global': {
        '@font-face': "Space Grotesk",
        },
    }
    }
})

export default theme;