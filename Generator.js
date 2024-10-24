function* generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().done); 