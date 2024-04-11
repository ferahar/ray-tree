import { scan } from "./scanDependens";

console.log('-=START=-')
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

scan();