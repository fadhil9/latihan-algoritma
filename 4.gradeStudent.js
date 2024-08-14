
function func(grades){

    let hasil = []

    for(let i = 0; i<grades.length;i++ ){

        if(grades[i]<38){
            hasil.push(grades[i])
        }else{
           
                let s = grades[i]+2;
                if(s%5==0){
                    hasil.push(s)
                }else{
                    let t = grades[i]+1;
                    if(t%5==0){
                        hasil.push(t)
                        }else{
                            hasil.push(grades[i])
                        }
                    }
            }
        }
        return hasil 
}


console.log(func([42,3,10,89,44,32]))