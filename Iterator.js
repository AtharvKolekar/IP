const arr=[1, 2, 3];
const iterator=arr[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);


// Custom Iterator

const myIterator={
    [Symbol.iterator](){
        let count=0;
        return{
            next(){
                count++;
                return count <= 5 ? {value : count , done : false} : 
                                    {value : undefined, done : true};
            }
        }
    }
}

for (let value of myIterator) {
    console.log(value); 
}