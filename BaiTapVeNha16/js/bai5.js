let a = 1;
let b = 99;
let c = 10

let array = [a,b,c];
for(let i = 0;i<array.length-1;i++)
    for(let j = i+1;j<array.length;j++)
     if(array[j]<array[i])
        { 
            let swap = array[i];
                array[i] = array[j]
                array[j] = swap;
        }
let str = array.toString();
console.log(str);

    
