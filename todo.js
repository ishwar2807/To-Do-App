const prompt= require('prompt-sync')();

let todo=[];
let req=prompt("plz enter yoour request:");

while(true){
    if(req=="add"){
        let task=prompt("plz enter your task");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="list")
    {
        console.log("------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
            console.log("-----------");
        }
    }
    else if(req=="delete")
    {
        let del=prompt("plz enter tsk that you want to be delete ");
        todo.splice(del,1);
        console.log("task delete");
    }
    else if(req=="quit")
    {
        console.log("quiting todo app");
        break;
    }
    req=prompt("plz enetr your request");
    
}