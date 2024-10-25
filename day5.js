
// var data = {
//     name : "Manish Basnet", 
//     age : 22, 
//     location : ['Itahari','Udayapur']
// }
// console.log(data['name'])



// // for in 
// for(let key in data){
//     console.log(data[key])
// }


var todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    
]  
function showTitleOfTodos(){
    for(let todo of todos){
        console.log(todo.title)
    }
}
showTitleOfTodos()
// // output --> for of loop---> delectus aut autem, quis ut nam facilis et officia qui
// for(let todo of todos){
//     console.log(todo.id)
// }


// // function 


// console.log(1+2)
// console.log(2+3)
// console.log(100+100)

function sendMail(data){
    // logic
}

// sendMail feature --> register gardaa mail janu paryo, forgotPassword, annoucement 

// sendMail function

// REGULAR FUNCTION , ARROW FUNCTION 

function sayHello(name){
    console.log("Hello i m " + name)
}

var sayHello = ()=>console.log("Hello i m manish")

// sayHello('manish')
// sayHello('arpan')

function addTwoNumbers(num1,num2=100){
    console.log(num1+num2)
}

addTwoNumbers(19)
// parameter, argument  
// function POV, kehi magiraxa vane --> parameter
// function call garda POV, pathaune kura --> argument 
var foods = ['chowmein','momo','burger']
var streetFoods = ['chatpate','panipuri','aalunimki']

// chowmein, momo, burger --> using function 

function loopFoods(foodsArray){
    for(let food of foodsArray){
        console.log(food)
    }
}

var loopFoods = (foodsArray)=>{
    for(let food of foodsArray){
        console.log(food)
    }
}

loopFoods(['chowmein','momo','burger'])
loopFoods(streetFoods)

console.log("Hello world")


function consoleText(text){
    console.log(text)
}
consoleText("Hello world")

