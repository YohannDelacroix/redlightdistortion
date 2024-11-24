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

export const onLoadHeader = () => {
    console.log("File loaded :::::::")
}

export const blalba = () => {
    console.log("k")
}