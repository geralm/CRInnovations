import { Roboto } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledEngineProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
const inter = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <CssBaseline />  {/*(Global rest baseline) Esto elimina los márgenes pues desactivamos la opción por defecto en tailwind css  */}
            {/* To insert mui styles before tailwind this important to use both */}
            {children}
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  )
}
