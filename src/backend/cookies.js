import Cookies from 'js-cookie'; 

function cookie(token){
    Cookies.set('cookietoken',token , { expires: 1 }); 
}

export {cookie};
