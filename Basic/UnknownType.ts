function MultipleByTwo(number: unknown){

    if (typeof number === " number"){
    return number *2;
}
return "Please provide a valid number "
}

console.log(MultipleByTwo(4));
console.log(MultipleByTwo("String"));