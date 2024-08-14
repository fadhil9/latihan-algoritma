

function fibonacci(params) {
    let fib = [0,1];

    for(let i =2; i<params;i++ ){
        let newfib = fib[i-2]+fib[i-1];
        fib[i]=(newfib);
    }
    return fib
}

console.log(fibonacci(100));