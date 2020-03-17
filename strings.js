function splitName(){
    let name=document.getElementById("name").value;
    // String array operations
    //console.log(name.split(" "));
    // //name=name.split(" ");
    // if (name.length >2)
    // {
    //     console.log("You have more than 2 parts to your name");
    // }
    
    //String Object operations
    let fullName = new String(name);
    let names = fullName.split(" ");
    //names is a string array
    console.log(names);


}

function replaceString(){
    let replaceText =document.getElementById("replaceText").value;
    let text = new String(replaceText);
    // replaces full word "is" case insensitive and all occurences
    text = text.replace(/\bis\b/gi,'was');
    let repString =document.getElementById("repString");
    repString.innerHTML=text;
}

function displayEscapenotations(){
    var text = "He said, \"Hey there!\" I replied, \"When can I\
     come,morning\\afternoon?\"";
    let repString =document.getElementById("repString");
    console.log(text);
    repString.innerHTML= text;
}