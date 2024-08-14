//1.pertama ada for loop kesatu , array.length -1
//2.buat variable untuk nyimpen i
//3.buat for loop kedua buat looping didalam array dan disini bukan permainan length tpi permainan value i nya
//4.buat if jika array[minvalue] > arr[b] maka minIndex = j
//5.tuker index  diluar loop kedua
// 6.ini lebih tepatnya permainan index

let array = [9,2,54,6,0,2,324,85,213,1];

for(let i = 0;i<array.length -1; i++){
    let minIndex = i
    for (let j = i+1; j < array.length; j++) {
        if(array[minIndex]>array[j]){ 
            minIndex = j
        }
    }
    let tampung = array[i]
    array[i] = array[minIndex]
    array[minIndex] = tampung //index1 = tampung
}
console.log(array)

