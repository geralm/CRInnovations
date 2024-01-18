import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
})

const theme = createTheme({
    palette:{
        mode: 'dark',
    }
});