function getTotalX(a,b) {
    function gcd(x,y) {
        while(y !== 0){
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x
    }    
}