console.log('hello from Node.js')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is the input text? ', (answer) => {

if(answer.length !== 1){
  console.log(`The input text is: "${answer}" and ${answer} has ${answer.length} characters`);
}  else {
    console.log(`The input text is: "${answer}" and ${answer} has ${answer.length} character`)
}

  rl.close();
});
