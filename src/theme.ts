import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    body1: {
      fontSize: "1rem",
      textAlign: "justify",
      textJustify: "inter-word",
      lineHeight: "1.5rem",
    },
  },
})

export default theme
