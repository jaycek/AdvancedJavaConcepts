function dispEmp(){
    let emp = document.getElementById("emp");

    let employee = {
        name: "Sandra", age: 28, gender: "F"
    };
    //let text = "<ul><li>" + employee.name + "</li></ul>";

    let person = JSON.stringify(employee);
    let person2 = JSON.parse(person);

    //emp.innerHTML = person;
    emp.innerHTML = person2.name + " ";
    emp.innerHTML+= person2.age + " ";
    emp.innerHTML+= person2.gender ;

}

function dispEmployees(){
    let emp = document.getElementById("employees");

    let employees =[
        {name: "Sandra", age: 28, gender: "F"},
        {name: "Athira", age: 23, gender: "F"},
        {name: "Gokul", age: 24, gender: "M"}
    ];
    
    
    // let text = "<ul>";
    // employees.forEach(element => {
    //     text+="<li>" + element.name + " " +  element.age + " " + element.gender + "</li>";
    // });
   
    // text+= "</ul>";
    // emp.innerHTML= text;

    // var output="";
    // employees.forEach(function (i){

    //     output+= '<li>' + i.name +'</li>';
 
    // });
    // console.log(output);
    // emp.innerHTML=output;


     //let persons = JSON.stringify(employees);
    
    // //emp.innerHTML = person;
    // emp.innerHTML = person2.name + " ";
    // emp.innerHTML+= person2.age + " ";
    // emp.innerHTML+= person2.gender ;

}