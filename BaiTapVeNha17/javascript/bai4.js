function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true; 
    }
    if (num % 2 === 0) {
        return false; 
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

let number = 29; 
if (isPrime(number)) {
    console.log(number + " là số nguyên tố.");
} else {
    console.log(number + " không phải là số nguyên tố.");
}