//wajib nulis  step by step dulu sebelum mecahin algoritma pake codingan
//cara cari element array dengan nilai terendah : 
// 1.buat variable minVal isi dengan element pertama
// 2.cek semua element selanjutnya
// 3.jika element selanjutnya lebih kecil dari minval update  minval jadi element tersebut

const array = [4,2,7,200,3,22,1,34,77,90,12314,2];

let minVal = array[0];
let maxval = array[0];
for(let i = 1; i<array.length; i++){
    if(minVal>array[i]){
        minVal = array[i];
    }
    if(maxval<array[i]){
        maxval= array[i]
    }
}
console.log(`element nilai terendah :${minVal}`)
console.log(`elemen nilai tertinggi :${maxval}`)