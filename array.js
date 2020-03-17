function displayArray(){

    let names = ["Jayce",
                "Alex",
                "Kuruvilla"];
    for(var i=0;i<names.length;i++)
    {
        console.log(names[i]);
    }

    names.forEach(function(i){
        console.log(i);
    });
        console.log(names.sort());
    //object
    var myfirstChild= {name:"Arpith Jacob Alex",age:13,sex:"Male"}
        
    //object members accessed by their names
        console.log(myfirstChild["name"]);
        console.log(myfirstChild["age"]);
        console.log(myfirstChild["sex"]);

    var x;
    for (x in myfirstChild){
        console.log(myfirstChild[x]);
    }
}

function dispLoop(){
    var myChildren=[
        {name:"Arpith Jacob Alex",age:13,sex:"Male"},
        {name:"Ashish Kuruvilla Alex",age:10,sex:"Male"},
        ]
        // let text="<ul>";
        // for(var i=0;i<myChildren.length;i++){
        //     console.log(myChildren[i].name);
        //     console.log(myChildren[i].age);
        //     console.log(myChildren[i].sex);
           
        //     text+= "<li>"+ myChildren[i].name + " "+ + myChildren[i].age + " " +  myChildren[i].sex+ "</li>";
        // }
        // text+="</ul>";
        // let disp = document.getElementById("disp");
        // disp.innerHTML = text;
        myChildren.push( {name:"baby3 Alex",age:3,sex:"Female"});
        let text="<ul>";
        myChildren.forEach(function(i){
            text+= "<li>"+ i.name + " "+ + i.age + " " +  i.sex+ "</li>";

        }
        );
        text+="</ul>";
        let disp = document.getElementById("disp");
        disp.innerHTML = text;
        
        
}

function sortNum(){

    let display = document.getElementById("arrNum");
    let numbers =[10,4,29,67,8,0];
    display.innerHTML = "Original array: " + numbers + "<br>";
//    display.innerHTML += numbers.sort(); doesn't work so we use compare 

    numbers.sort(function(a,b){
        return a-b;
    });

    //to get descending order, reverse the sorted array
    //display.innerHTML += numbers.reverse();
    
    //to get descending order, 
    numbers.sort(function(a,b){
        return b-a;
    });

    display.innerHTML += numbers;

}

function newArr(){
    
    var numbers = [45, 4, 9, 16, 25];
    let display = document.getElementById("arr");
    display.innerHTML = "Original array: " + numbers + "<br>";
    let numbers2 = numbers.map(function(x){
        return x*2;

    } );
    display.innerHTML += "New array: " + numbers2;

}

function filterNum(){
    var numbers = [45, 4, 9, 16, 25];
    let display = document.getElementById("arrFil");
    display.innerHTML = "Original array: " + numbers + "<br>";
    let numbers2 = numbers.filter(function(x){
        return x>18;
    });
    display.innerHTML += "New array: " + numbers2;
}

function dispThis(){
    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
console.log(person.fullName());
}