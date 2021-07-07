const data = require('./data.json');

const task1Result = (animals) => {
    const result = {
        dogs: 0,
        cats: 0
    };
    let sumAge = 0
    animals.forEach((animal) => {
        const { type, age } = animal 
        if (type === "dog") ++result.dogs
        else ++result.cats
        sumAge += age
    })
    result.avgage = Math.round(sumAge/animals.length)
    return result;
};

console.log(task1Result(data));

const task2Result = (animals) => {
    return animals.reduce((prev, curr) => {
        const { breed , features, type } = curr
        if (type === "dog" && breed) {
            if (features.includes("black")) {
                return prev += 1
            }
        }
        return prev
    },0);
};

console.log(task2Result(data));

const task3Result = (animals) => {
    return animals.filter((animal) => {
        const { type, features } = animal
        const isBlack = features.includes("black")
        const isWhite = features.includes("white")
        if (type === "cat" && isBlack) return true 
        else if (type === "dog" && isWhite) return true
    });
};

console.log(task3Result(data));

const task4Result = (animals) => {
    const cats = []
    const dogs = []
    for (const animal of animals) {
        if (animal.type === "cat") {
            cats.push(animal)
        } else dogs.push(animal)
    }
    return [...cats.sort((a,b) => b.age - a.age),
        ...dogs.sort((a,b) => a.age - b.age)
    ];
};

console.log(task4Result(data));