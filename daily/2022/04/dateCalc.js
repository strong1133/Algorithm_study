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

const dayCha =(start, last)=>{
    let startDate = new Date(start.substring(0, 4),start.substring(4, 6)-1,start.substring(6, 8),start.substring(8, 10),start.substring(10, 12),start.substring(12, 14))
    let lastDate = new Date(last.substring(0, 4),last.substring(4, 6)-1,last.substring(6, 8),last.substring(8, 10),last.substring(10, 12),last.substring(12, 14))
    startDate = convertUTCDateToLocalDate(startDate)
    lastDate = convertUTCDateToLocalDate(lastDate)

    let rawCha = (lastDate -startDate) /1000/60;
    let mathFloor = Math.floor(rawCha*100)/100

    return  mathFloor
}

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}


let today = new Date(); 
today = today.toISOString().replace(/T|Z/g,'').replace(/:|-/g,'').replace('.','');

let lastDate = '20220402';

let tempToday = `${today.substring(0, 4)}-${today.substring(4, 6)}-${today.substring(6, 8)}`
let tempLast = `${lastDate.substring(0, 4)}-${lastDate.substring(4, 6)}-${lastDate.substring(6, 8)}`

console.log(tempLast, tempToday)
console.log(dateCalc (new Date("2022-04-02"),  new Date("2022-04-21")))

console.log(dayCha('20220409135853','20220409141506') )


// today = today.toString().replace(/T|Z/g,'').replace(/:|-|./g,'');

///2022-04-09-14:15:06
///2022-04-09-13:58:53

141506
135853


// 16분 13초 

