'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider as MaterialProvider } from '@mui/material/styles'
import {getPalette}  from './getPalette'
/*No es tan facil como exportar un ThemeProvider como componente del cliente
ya que estos depende del estado del cliente, estos providers son necesarios en la raiz de la aplicación
por lo que usamos contextProviders

Aquí no hago lo que dije ¿Por qué?
recuerda que material ui import ThemeProvider de @mui/material/styles no estamos usando contextProviders 
directamente de la página de nextjs. por lo que esto funciona bien 
*/
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
})

const theme = createTheme({
    palette:{
        // mode: 'light',
        primary:{
            main: '#025696',
            light: '#F9AB47',
            // dark: '#1dd3b0',
            // contrastText: '#affc41',
        },
        secondary:{
            main: '#F9AB47',
            light: '#025696',
            dark: '#086375',
            contrastText: '#1dd3b0',
        }
    },
    // primary: {
    //     main: '#F9AB47',
    //     light: '#F9AB47',
    //     dark: '#1dd3b0',
    //     contrastText: '#affc41',
    // },
    // secondary: {
    //     main: '#F9AB47',
    //     light: '#025696',
    //     dark: '#086375',
    //     contrastText: '#1dd3b0',
    // },
});
function ThemeProvider({children}) {

    return (
        <MaterialProvider theme={theme}>
            {children}
        </MaterialProvider>
    )
}

export default ThemeProvider;

/*{ 'orange_(web)': { DEFAULT: '#F9AB47', 100: '#3e2402', 200: '#7d4804', 300: '#bb6c06', 400: '#f7900a', 500: '#f9ab47', 600: '#fabd6d', 700: '#fccd91', 800: '#fddeb6', 900: '#feeeda' }, 'lapis_lazuli': { DEFAULT: '#025696', 100: '#00111e', 200: '#01233c', 300: '#01345a', 400: '#024579', 500: '#025696', 600: '#037fdd', 700: '#2ca2fc', 800: '#72c1fd', 900: '#b9e0fe' }, 'yale_blue': { DEFAULT: '#023C70', 100: '#000c16', 200: '#01182c', 300: '#012442', 400: '#023058', 500: '#023c70', 600: '#0466bc', 700: '#158ffa', 800: '#63b5fc', 900: '#b1dafd' }, 'satin_sheen_gold': { DEFAULT: '#CA9C40', 100: '#2a200b', 200: '#533f17', 300: '#7d5f22', 400: '#a77e2e', 500: '#ca9c40', 600: '#d5b065', 700: '#dfc48c', 800: '#ead7b2', 900: '#f4ebd9' }, 'electric_blue': { DEFAULT: '#51EFFF', 100: '#003d43', 200: '#007987', 300: '#00b6ca', 400: '#0ee7ff', 500: '#51efff', 600: '#74f1ff', 700: '#97f5ff', 800: '#baf8ff', 900: '#dcfcff' }, 'picton_blue': { DEFAULT: '#0AAFE8', 100: '#02232e', 200: '#04465c', 300: '#06698a', 400: '#088cb8', 500: '#0aafe8', 600: '#2fc5f6', 700: '#63d3f9', 800: '#97e2fb', 900: '#cbf0fd' }, 'vivid_sky_blue': { DEFAULT: '#2FC7F4', 100: '#032b37', 200: '#06566e', 300: '#0981a6', 400: '#0cacdd', 500: '#2fc7f4', 600: '#58d1f6', 700: '#82ddf8', 800: '#ace8fb', 900: '#d5f4fd' } }*/ 