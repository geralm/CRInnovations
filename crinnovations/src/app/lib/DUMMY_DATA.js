const DUMMY_SERVICES = [{
    title: "Pagina web estática", 
    description: "Pagina web estática con información básicay sin funcionalidades complejas",
    precio:{
        min: 300,
        max: 800
    },
    category: "Pagina web",
},{
    title: "Pagina web dinámica",
    description: "Pagina web dinámica permite interactividad avanzada, integración con bases de datos y servicios externos",
    precio:{
        min: 800,
        max: 2000
    },
    category: "Pagina web",
},{
    title: "Diseño personalizado",
    description: "El cliente requiere un diseño personalizado y atractivo para su pagina web",
    price:{
        min: 200,
        max: 'A convenir'
    },
    category: "Pagina web",
 }
// {
//     title: "Aplicación de escritorio",
//     description: "Aplicación de escritorio para Windows de utilidad para el cliente, windows",
// }
]
const CONTACT_INFO = {
    email: "estebanlm852002@hotmail.com",
    phone: "+506 8313 7865",
    address: "San José, Costa Rica",
    instagram: "https://www.instagram.com/gera_lm_/",
    whatsapp: "https://wa.me/50683137865"
}
const SOCIAL_INFO =[
    {
        name:"Instagram",  
        url: "https://www.instagram.com/gera_lm_/",
    },{
        name:"Whatsapp",
        url: "https://wa.me/50683137865"
    },{
        name:"Facebook",
        url: "https://www.facebook.com/estebanlm852002"
    }
]
export {SOCIAL_INFO, DUMMY_SERVICES, CONTACT_INFO}
