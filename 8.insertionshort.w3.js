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
        let kunci = arr[i]  //nilai elemen array                //[4,5,9,(1)] kunci =1
        let indexkirikunci = i-1      //index bagian kiri kunci  // 2

        while(indexkirikunci>=0 && arr[indexkirikunci]>kunci){  //[4,5,(9>kunci=1),1] true, [4,(5>kunci=1),9,9] true
                                                                //[(4>kunci=1),5,1,9] true , false 

            arr[indexkirikunci+1] = arr[indexkirikunci]         //[4,5,(9,9)] , [4,(5,5),9]. [(4,4),5,9]
            indexkirikunci= indexkirikunci-1                      //1, 0, -1
        }

        arr[indexkirikunci+1] = kunci                           //[(1),4,5,9,)]
    }
    return arr
}

console.log(insertionShort([4,5,9,1]))

