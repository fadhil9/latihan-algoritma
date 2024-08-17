// insertion short
// 1.looping dari elemen [1] dari dengan for loop
// 2.array[i]/1 elemen sekarang masukin var key
// 3.var j = i-1 /0
// 4.buat while jika j >=0 dan arr[j]/0 >arr[i]/1 alias  jika a>b
// 5.jika true maka  arr[j+1] = arr[j]/   alias maka a = b
// 6. j/0 = j/0-1 
// 7.j=j-1 utk while loopnya berhenti
// 8.jika berhenti key = arr[j+1] alias b adalah a

function insertionShort(arr) {
    for(let i = 1; i< arr.length; i++){
        let kunci = arr[i]  //b itu nilai elemen kedua : b=3
        let kirikunci = i-1 //  a itu index sebelah kiri sebelum b , a = 0

        while(kirikunci>=0 && arr[kirikunci]>kunci){
            
            // arr[a+1] = arr[a]  
            arr[a] = arr[a+1]  
            a = a-1 
        }

        arr[a+1] = b
    }
    return arr
}

console.log(insertionShort([10,3,9]))

