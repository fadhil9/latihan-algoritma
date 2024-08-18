//insertion short itu pake for loop dan while loop
//1.buat for loop dengan nilai i =1 
//2.buat variable key dengan nilai array[y]
//3.buat var j = i-1 utk bandingin nanti ke key
//4.buat while loop dengan 2 syarat. j>=0 dan arr[j]>key
//5.isinya arr[j+1] = arr[j]    jadi misal [4,1] diubah jadi [4,4]
//6. j = j-1 . ada 2 tujuan biar while loopnya berenti dan agar bandingin terus kekiri,,
//7.jika while loop berhenti berarti nilai j = -1  dan array [4,4]
//8.maka kita buat arr[j+1] = key   == arr[-1+1] = 1 jadi hasilnya array [1,4]

function insertion(arr) {
    for(let i=1; i < arr.length; i++){
        let key = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]

            j=j-1;
        }
        arr[j+1]=key;
    }
    return arr
}
let array =[4,1,6,4,12,4,33,9321,0];
console.log(insertion(array));
