var fs = require('fs');


var employees;
var departments;

function initialize(){

    var obj = JSON.parse(fs.readFileSync('data/employees.json', 'utf8'));
    employees = obj;
    var obj = JSON.parse(fs.readFileSync('data/departments.json', 'utf8'));
    departments = obj;

    return new Promise(function(resolve, reject){ 

        if(employees.employeeNum == 1 && departments.departmentId == 1){
            resolve("files loaded success");
        } else{
            reject("unable to read files");
        }
});   



}

function getAllEmployees(){

}

function getManagers(){

}

function getDepartments(){

}