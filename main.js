console.log('JS OK');
const container = document.getElementById("big-red");


for(let i=1;  i<=100; i++) {
    
    if (i % 3 === 0){ 
    console.log('fizz');
}
    else if (i % 5 === 0) {
    console.log('buzz');
}
    if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
}
    else{
    console.log(i);
}
}