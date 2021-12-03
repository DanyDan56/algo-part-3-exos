/*
 * Pour chaque nombre compris entre min et max
 * Si le nombre est divisible par 3 => Fizz
 * Si le nombre est divisible par 5 =>  Buzz
 * Si le nombre est divisible par 3 et par 5 => FizzBuzz
 * Sinon retourner le nombre
 *
 * Voir le fichier de tests associé (spec/fizzBuzzSpec.js)
 */
function fizzBuzz(min, max) {
    // CODE HERE
    let array = [];
    let i = min;

    while (i < max) {
        if(i % 3 === 0 && i % 5 === 0)
            array.push("FizzBuzz");
        else if(i % 3 === 0)
            array.push("Fizz");
        else if(i % 5 === 0)
            array.push("Buzz");
        else
            array.push(i);

        ++i;
    }

    return array;
}

export { fizzBuzz };