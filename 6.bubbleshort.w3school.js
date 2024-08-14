// 1.buat for loop  i sebanyak length arraynya
// 2.buat for loop j sebanyak length dikurang i dikurang 1,  
// misal length 10 - 0 -1 = 9 jadi ketika for loop nilai length di for loop kedua bisa deacrement otomatis 
// 3.jika array[j] > array[j]+1 maka array[j+1] = x, array[j+1] = array[j], array[j] = x
// intinya a > b  cara biar nilai a = b dan nilai b = a ,, maka nilai b kita tampung dlu ke c 
//setelah itu nilai a kita taro di b ,, nilai c yg menampung nilai b kita taro di a
// b = c, b = a , a = c

let array = [8,3,10,2,7,6,4,1,9,5];
const n = array.length//n=10

for(let i = 0; i<n; i++){
    for(let j =0; j<n-i-1;j++ ){
        if(array[j]>array[j+1]){
            let x = array[j+1];
            array[j+1] =array[j]
            array[j] = x;
        }   
    }
}

console.log(array)