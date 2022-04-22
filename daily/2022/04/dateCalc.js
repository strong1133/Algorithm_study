const dateCalc =(startDate, lastDate)=> {
    console.log(startDate, lastDate)
    if(!(startDate instanceof Date && lastDate instanceof Date)) return "Not Date Object";
    var result = [];
    var curDate = startDate;

    while(curDate <= lastDate) {
        result.push(curDate.toISOString().replace(/T|Z/g,'').replace(/:|-/g,'').replace('.','').substring(0,8) );
        curDate.setDate(curDate.getDate() + 1);

    }
    return result;
}
let today = new Date(); 
today = today.toISOString().replace(/T|Z/g,'').replace(/:|-/g,'').replace('.','');

let lastDate = '20220402';

let tempToday = `${today.substring(0, 4)}-${today.substring(4, 6)}-${today.substring(6, 8)}`
let tempLast = `${lastDate.substring(0, 4)}-${lastDate.substring(4, 6)}-${lastDate.substring(6, 8)}`

console.log(tempLast, tempToday)
console.log(dateCalc (new Date("2022-04-02"),  new Date("2022-04-21")))



// today = today.toString().replace(/T|Z/g,'').replace(/:|-|./g,'');