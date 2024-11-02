const headerStyleDefault = {
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

let currentHeaderStyle = headerStyleDefault;

const onLoadHeader = () => {
    let variable = 2;
    console.log(variable);
    //currentHeaderStyle = headerStyleDefault;
    console.log(currentHeaderStyle);
}

//Header button in responsive design
export const handleButtonHeader = () => {
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
