

export const onLoadHeader = () => {

    /*const headerStyleDefault = {
        buttonActive: false,
        buttonImg: MenuIcon,
        headerClass: 'header-desktop',
        navMobile: 'nav-mobile-hidden'
    };
    
    const headerStyleMobile = {
        buttonActive: true,
        buttonImg: CrossIcon,
        headerClass: 'header-mobile',
        navMobile: 'nav-mobile'
    }
    
    let currentHeaderStyle = {...headerStyleDefault}; 
    
    //currentHeaderStyle = headerStyleDefault;
    console.log(currentHeaderStyle);*/


    console.log("onLoadHeader");
    
}

//Header button in responsive design
export const handleButtonHeader = () => {
    console.log("Click button header")
    if(currentHeaderStyle.buttonActive){
        currentHeaderStyle = headerStyleDefault;
    }
    else{
        currentHeaderStyle = headerStyleMobile;
    }
}

export const getHeaderStyle = () => {
    return currentHeaderStyle;
}
