import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Roboto } from "next/font/google";


const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});
const _getDesignTokens = (mode) => ({
    palette: {
        //
        mode,
        ...(mode === 'light' ? //if light mode
            {
                primary: {
                    main: '#025696',
                },
                secondary: {
                    main: '#023C70',
                },

                // contrastText: '#fff'
            }
            : //otherwise, dark mode 
            {
                primary: {
                    main: '#51EFFF',
                    
                },
                secondary: {
                    main: '#F9AB47',
                },
                // contrastText: '#fff'
            })
    }
});

function getTheme(themeName){
    let theme = createTheme(_getDesignTokens(themeName));
    theme = responsiveFontSizes(theme);
    return theme;
}
export default getTheme;