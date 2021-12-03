/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */
function average(scores) {
    // CODE HERE
    let i = 0;
    let average = 0;

    while (i < scores.length)
    {
        average += scores[i];
        ++i;
    }
    
    average = average / scores.length;

    return average;
}

export { average };