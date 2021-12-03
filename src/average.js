/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */
function average(scores) {
    // CODE HERE
    let average = 0;

    scores.forEach(function(score){
        average += score;
    });
    
    average /= scores.length;

    return average;
}

export { average };