import { Roboto } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledEngineProvider } from '@mui/material';
const inter = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AppRouterCacheProvider>
          {/* To insert mui styles before tailwind this important to use both */}
          <StyledEngineProvider injectFirst>
            {children}
          </StyledEngineProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
