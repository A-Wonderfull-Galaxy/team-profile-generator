//generate team then push them to the html

//generate manager
const generateManager = function(manager){
    return `
    <div class="col-6">
        <div class="card mx-auto mb-3 box-shadow" >
            <h4 class="card-header team-background character-color">${manager.name}<br />
                <br /> <i class="material-icons">local_cafe</i> Manager
            </h4>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office numner: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
}

//generate intern
const generateIntern = function(intern){
    return`
    <div class="col-6">
        <div class="card mx-auto mb-3 box-shadow">
            <h4 class="card-header team-background character-color">${intern.name}<br />
                <br /> <i class="material-icons">school</i> Intern
            </h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `
}

//generate engineer
const generateEngineer = function(engineer){
    return`
    <div class="col-6">
        <div class=" card mx-auto mb-3 box-shadow">
            <h4 class="card-header team-background character-color">${engineer.name} <br />
                <br /> <i class="material-icons">psychology</i> Engineer
            </h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">GitHub: ${engineer.github}</li>
            </ul>
        </div>
    </div>
    `
}

//get data for array
generateHtml = (data)=>{
    //array for cards
    pageArray =[]

    //if this class, take these array data
    for (let i =0;i<data.length;i++){
        const employee = data[i]
        const role = employee.getRole()

        //calls generate manager function
        if (role ==='Manager'){
            const managerClass = generateManager(employee);

            pageArray.push(managerClass)
        }

        //calls generate intern function
        if (role ==='Intern'){
            const internClass = generateIntern(employee);
        
            pageArray.push(internClass)
        }

        //calls generate intern function
        if (role ==='Engineer'){
            const engineerClass = generateEngineer(employee);
                
            pageArray.push(engineerClass)
        }
    }

    //join styring
    const employeeClass = pageArray.join('')

    //returns to page
    const generateTeam = generateTeamHtml(employeeClass)
    return generateTeam
}

//generates the html page
const generateTeamHtml = function(employeeClass){
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-VA-Compatible" content="ie=edge">
            <link rel="stylesheet" 
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
                crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            <title>Team Profiles</title>
        </head>
        <body>
            <nav class="mb-5 pb-2 pt-2 nav-background">
                <h1 class="text-center character-color">
                    Team Profile
                </h1>
            </nav>
    
            <div class="container">
                <div class="row">
                    <!--Team Class-->
                    ${employeeClass}
    
    
                </div>
                
            </div>
        </body>
    </html>
    `;
}

//export template
module.exports = generateHTML;