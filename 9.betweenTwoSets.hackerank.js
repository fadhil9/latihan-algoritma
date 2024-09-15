function getTotalX(a,b) {
    function gcd(x,y) {
        while(y !== 0){
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x
    } 

    function lcm(x,y){
        return (x*y)/gcd(x,y)
    }

    let lcmA = a.reduce((acc,val)=>lcm(acc,val));

    let gcdB = b.reduce((acc,val)=>gcd(acc,val));

    let count = 0;
    for(let i=lcmA; i<gcdB; i+=lcmA){
        if(gcdB % i === 0){
            count++
        }
    }
    return count
}

console.log(getTotalX([2,6],[24,36]));