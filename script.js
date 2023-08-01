const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 1 + i *2; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)