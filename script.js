// A
const superheroes = [
    {name: "Batman",    alter_ego: "Bruce Wayne"}, 
    {name: "Superman",  alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
];

const findSpiderMan = (superheroes) => {
    return superheroes.find((superhero) => {
        return superhero.name === "Spiderman";
    });
};
   
console.log(findSpiderMan(superheroes));

// B
const doubleArrayValues = (array) => {
    return array.map(x => x * 2);
};

console.log(doubleArrayValues([1, 2, 3]));

// C
const containsNumberBiggerThan10 = (array) => {
    return array.some((item) => {
        return item > 10;
    });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));

// D
const isItalyInTheGreat7 = (array) => {
    return array.includes("Italy");
};

console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));

// E
const tenFold = (array) => {
    let newArray = [];
    array.forEach((item) => newArray.push(item * 10));
    return newArray;
};

console.log(tenFold([1, 4, 3, 6, 9, 7, 11]));

// F
const isBelow100 = (array) => {
    let checked = false;
    
    array.forEach((item) => {
        if(item > 100) {
            checked = true;
        };
    });

    return !checked;
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));

// G
const bigSum = (array) => {
    return array.reduce((currentTotal, item) => {
        return item + currentTotal;
    }, 0);
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));



