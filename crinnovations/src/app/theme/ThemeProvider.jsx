'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider as MaterialProvider } from '@mui/material/styles'
/*No es tan facil como exportar un ThemeProvider commo componente del cliente
ya que estos depende del estado del cliente, estos providers son necesarios en la raiz de la aplicación
por lo que usamos contextProviders*/
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
})

const theme = createTheme({
    palette:{
        mode: 'dark',
    },
    primary: {
        main: '#3c1642',
        light: '#086375',
        dark: '#1dd3b0',
        contrastText: '#affc41',
    },
    secondary: {
        main: '#b2ff9e',
        light: '#affc41',
        dark: '#086375',
        contrastText: '#1dd3b0',
    },
});
function ThemeProvider({children}) {

    return (
        <MaterialProvider theme={theme}>
            {children}
        </MaterialProvider>
    )
}

export default ThemeProvider;