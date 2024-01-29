import { Roboto } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledEngineProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import ToggleThemeProvider  from './theme/ToggleThemeProvider';

const inter = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ToggleThemeProvider>
              {/* ThemeProvider needs to stay inside Caché */}
              <CssBaseline />  {/*(Global rest baseline) Esto elimina los márgenes pues desactivamos la opción por defecto en tailwind css  */}
              {/* To insert mui styles before tailwind this important to use both */}
              {children}
            </ToggleThemeProvider>
            {/*Theme provider tiene un problema: createContext only works in Client Components. 
            Add the "use client" directive at the top of the file to use it.
  Read more: https://nextjs.org/docs/messages/context-in-server-component* por lo que se soluciona de la siguiente manera
  https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns* y esto es porque usa un hook
  los hooks pertenecen a la interactabilidad del cliente*/}
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  )
}
