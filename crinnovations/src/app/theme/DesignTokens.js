// export const Colors = {
//     themeOne:{
//         primary: '3c1642',
//         secondary: '086375',
//         turquoise: '1dd3b0',
//         limegreen: 'affc41',
//         lightgreen: 'b2ff9e'
//     }
    
// }
export  const getDesignTokens = (mode) =>({
    palette: {
        //
        mode, ...(mode === 'light' ? //if light mode
        {
            primary: {
                main: '#3c1642',
                // contrastText: '#fff'
            },
        }
        : //otherwise, dark mode 
        {
            primary: {
                // main: '#3c1643',
                // contrastText: '#fff'
            },
        })
    }
});