
const inquirer = require('@inquirer/prompts')

async function run(){
    const name = await inquirer.input({
        message:"Name"
    });
    const password = await inquirer.password({
        message:"Password"
    })

    if(name=='admin' && password=='admin'){
        console.log('you are admin')
    }
}

run();


