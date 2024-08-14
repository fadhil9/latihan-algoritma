
function time(n) {
    let hasil;
    const sisa = n.slice(2,8);

    if(n.slice(0,2)== "12" && n.match("AM")){
        
        const hasils = `00${sisa}`
         hasil = hasils
    }else if(n.match("AM")||n.slice(0,2)== "12" && n.match("PM")){
        const semua = n.slice(0,8);
        hasil = semua
    }else if(parseInt(n.slice(0,2))!=12&& n.match("PM")){
        const plus = parseInt(n.slice(0,2))+12;
        hasil = `${plus}${sisa}`
    }

    return hasil;
}

console.log(time("01:01:00PM"))

