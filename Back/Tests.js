const functions = require('./Functions')

for(let i = 0 ; i < 15; i++){
    console.log("i = ", i, " -> ", functions.convertMonthNtoS(i.toString()))
}


console.log("TEST convert Month S to N")
let monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'DEK', 'DOKO']
for(let i in monthList){
    console.log("Convert Month S to N with ", monthList[i] , " : ", functions.convertMonthStoN(monthList[i]))
}


console.log("Compare tour dates function - TEST")
let listPairDates = [
    {date1: {"day":"25", "month": "NOV", "year": "2022"}, date2 : {"day":"22", "month": "NOV", "year": "2022"}},
    {date1: {"day":"19", "month": "DEC", "year": "2022"}, date2 : {"day":"19", "month": "JUL", "year": "2022"}},
    {date1: {"day":"17", "month": "JUN", "year": "2023"}, date2 : {"day":"22", "month": "NOV", "year": "2022"}},
    {date1: {"day":"1", "month": "DEC", "year": "2021"}, date2 : {"day":"22", "month": "NOV", "year": "2022"}},
    {date1: {"day":"4", "month": "NOV", "year": "2022"}, date2 : {"day":"4", "month": "NOV", "year": "2022"}}
]

for(let i in listPairDates){
    switch(functions.compareTourDates(listPairDates[i].date1, listPairDates[i].date2)){
        case 1: 
            console.log(listPairDates[i].date1, " Supérieure à ", listPairDates[i].date2);
            break; 
        case -1: 
            console.log(listPairDates[i].date1, " Inférieure à ", listPairDates[i].date2); 
            break;
        case 0: 
            console.log(listPairDates[i].date1, " même date que ", listPairDates[i].date2); 
            break;
        default: 
            console.log("bug") 
            break;
    }
}


console.log("Tour dates sort - TEST")
let tourDates = [
                    {day: "29", month:"NOV", year:"2022"},
                    {day: "27", month:"NOV", year:"2022"},
                    {day: "18", month:"NOV", year:"2022"},
                    {day: "01", month:"DEC", year:"2022"},
                    {day: "25", month:"DEC", year:"2022"},
                ]
functions.sortTourDates(tourDates)


