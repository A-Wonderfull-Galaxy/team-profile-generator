//node packages
const inquirer = require('inquirer')
const fs = require('fs')

//link page to generate file
const generateHtml = require('./src/generateHtml.js')

//team array
const teamArray = []

//team modules
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')

// start prompt
// manager prompt
const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the managers name?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the office number:"
        }
    ])
    .then(managerInput=>{
        const {name, id, email, OfficeNumber}=managerInput
        const manager = new Manager (name, id, email, officeNumber)

        teamArray.push(manager)
        console.log(manager)
    })
}

//intern prompt
const addIntern = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the inters name?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address:'
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the schools name:"
        },
        {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Add another intern?',
            default: false
        }
    ])
    .then(internInput=>{
        const {name, id, email, school}= internInput
        const intern = new Manager (name, id, email, school)

        teamArray.push(intern)
        console.log(intern)
        
        //confirn to add more intern
        if (confirmAddIntern){
            return addIntern(teamArray);
        }else{
            return teamArray
        }
    })
}

//Engineer prompt
const addEngineer = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern name?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter inter ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address:'
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the GitHub page:"
        },
        {
            type: 'confirm',
            name: 'confirmAddEngineer',
            message: 'Add another engineer?',
            default: false
        }
    ])
    .then(engineerInput=>{
        const {name, id, email, github, confirmAddEngineer}= engineerInput
        const engineer = new Engineer (name, id, email, github)

        teamArray.push(engineer)
        console.log(engineer)

        //confirm to add more engineer
        if (confirmAddEngineer){
            return addEngineer(teamArray);
        }else{
            return teamArray
        }
    })
}

//fcuntion to generate html page file using script
const writeFile = data =>{
    fs.writeFile('/dist/index.html',data,err=>{
        //if err thorw err
        if (err){
            console.log(err);
            return
        }else{
            //when file is successfully created
            console.log("html was generated");
        }
    })
}

//function manager
addManager()
    .then(addEngineer)
    .then(addIntern)
    .then(teamArray =>{
        return generateHtml(teamArray)
    })
    .then(fileHtml =>{
        return writeFile(pageHtml)
    })
    .catch(err =>{
        console.log(err)
        
    })
        