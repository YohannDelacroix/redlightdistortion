// Convert a month numeric value to a string value like "JAN" for January (01)
function convertMonthNtoS(monthNumeric){
    switch(monthNumeric){
        case '1':
            return "JAN";
        case '2':
            return "FEB";
        case '3':
            return "MAR";
        case '4':
            return "APR";
        case '5':
            return "MAY";
        case '6':
            return "JUN";
        case '7':
            return "JUL";
        case '8':
            return "AUG";
        case '9':
            return "SEP";
        case '10':
            return "OCT";
        case '11':
            return "NOV";
        case '12':
            return "DEC";
        default:
            console.log("convertMonthNtoS parameter is not a month")
    }
}



module.exports = {convertMonthNtoS}