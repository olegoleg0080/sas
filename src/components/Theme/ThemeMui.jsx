import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#192599",
            lightMain: "#495AF5",
            dark: "#161616",
            light: "#FCFCFC",
            purpure: "#D5D2FF",
            gray: "#9C9C9C"
        },
    },
    components: {
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: '-8px', 
                    fontSize: '12px',
                    color: '#d32f2f',
                    fontFamily: "cursive",
                    fontWeight: "700",
                    width: "max-content",
                    lineHeight: "1.2"
                    
                },
            },
        },
    },
});
