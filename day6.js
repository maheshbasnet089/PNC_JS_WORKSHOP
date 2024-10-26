
// // // // higher order function (forEach,map,filter,reduce) --> only for arrays

// // // // foreach --> array loop garne 
// // // var days = ["sunday",'monday','tuesday','wednesday']
// // // days.forEach(function(day){
// // //     console.log(day)
// // // })

// // // var todos = [
// // //   {
// // //     "userId": 1,
// // //     "id": 1,
// // //     "title": "delectus aut autem",
// // //     "completed": false
// // //   },
// // //   {
// // //     "userId": 1,
// // //     "id": 2,
// // //     "title": "quis ut nam facilis et officia qui",
// // //     "completed": false
// // //   },
// // //   {
// // //     "userId": 1,
// // //     "id": 3,
// // //     "title": "fugiat veniam minus",
// // //     "completed": false
// // //   }
// // // ]
// // // todos.forEach(function(todo){
// // //     console.log(todo.title)
// // // })

// // // var nums = [1,2,3,4,5]
// // // var squareOfNums = []

// // // nums.forEach(function(num){
// // //    squareOfNums.push(num * num)
// // // })
// // // console.log(nums)
// // // console.log(squareOfNums)

// // // // map
// // var nums = [1,2,3,4,5]
// // var squareOfNums = nums.map(function(num){
// //   return num * num
// // })
// // console.log(squareOfNums)

// // // 1 * 1 = 1 --->  [1,4,9,16,25]

// // var datas = [
// //     {
// //         firstName : "Manish", 
// //         lastName : "Basnet"
// //     }, 
// //     {
// //         firstName : "Yuresh", 
// //         lastName : "Gurung"
// //     }, 
// //     {
// //         firstName : "Samyog", 
// //         lastName : "Khadka"
// //     }
// // ]

// // var result = datas.map(function(data){
// //     return {
// //         ...data,
// //         fullName : data.firstName + data.lastName
// //     }
// // })
// // console.log(datas)
// // console.log(result)

// // // var newDatas = [
// // //     {
// // //         firstName : "Manish", 
// // //         lastName : "Basnet", 
// // //         fullName : "Manish Basnet"
// // //     }, 
// // //     {
// // //         firstName : "Yuresh", 
// // //         lastName : "Gurung", 
// // //         fullName : "Yuresh Gurung"
// // //     }, 
// // //     {
// // //         firstName : "Samyog", 
// // //         lastName : "Khadka", 
// // //         fullName : "Samyog Khadka"
// // //     }
// // // ]

// // var nums = [1,2,3]
// // var output = nums.map(function(num){
// //     return {
// //         text : "PNC College", 
// //         num : num
// //     }
// // })
// // console.log(output)

// // // output --> 
// // /*
// // [
// //     {
// //         text : "PNC COllege", 
// //         num : 1
// //     }, 
// //     {

// //         text : "PNC COllege", 
// //         num : 2
// //     }, 
// //     {
// //         text : "PNC COllege", 
// //         num : 3
// //     }
// // ]
// // */

// // var foods = [
// //     {
// //         name : "momo", 
// //         price : 150, 
// //         qty : 2
// //     }, 
// //     {
// //         name : "chowmein", 
// //         price : 120, 
// //         qty : 4
// //     }
// // ]
// // var resu = foods.map(function(food){
// //     console.log(food)
// //     return {
// //         ...food,
// //         total : food.price * food.qty
// //     }
// // })
// // console.log(resu)

// // /* 
// // op -
// // [
// //     {
// //         name : "momo", 
// //         price : 150, 
// //         qty : 2, 
// //         total : 300
// //     }, 
// //     {
// //         name : "chowmein", 
// //         price : 120, 
// //         qty : 4, 
// //         total : 480
// //     }
// // ]


// // */


// // filter 
// var nums = [1,2,3,4,5,6,7,8,9,10]
// var evenNums = nums.filter(function(num){
//     return num % 2 == 0 
// })

// // console.log(evenNums)

// // var files = ['index.css','index.c','index.html','index.js']
// // var result = files.filter(function(file){
// //     return file.endsWith(".js")
// // })
// // console.log(result)


// var foods = [
//     {
//         name : "momo", 
//         price : "150", 
//         qty : 2
//     }, 
//     {
//         name : "chowmein", 
//         price : "120", 
//         qty : 4
//     }
// ]
// var output = foods.filter(function(food){
//     return food.price == 150
//     // return "150" === 150
// })
// console.log(output)

// var students = [
//     {
//         name : 'Anish', 
//         status : 'pass'
//     }, 
//     {
//         name : 'Manish', 
//         status : 'fail'
//     }, 
//     {
//         name : 'Anup', 
//         status : 'pass'
//     }
// ]
// // wap display status pass hune rw name ends with sh
// const op = students.filter(function(student){
//     return student.status === 'pass' && student.name.endsWith('sh')
// })
// console.log(op)


// reduce 
var nums = [1,2,3,4,5]
var sum = nums.reduce(function(accumulator,num){
    return num + accumulator
},0)
/* 
accumulator = 0 
return 1 + 0 = 1 

accumulator = 1 
return 2 + 1 = 3 

acc = 3 
return 3 + 3 = 6 

acc = 6 
return 4 + 6 = 10 

acc = 10 
return 5 + 10 = 15 

acc = 15 



*/



// {
    //     totalAmount : 123123,
    //     totalQty : 123
    // }
    
    var cart = [
        {
            name : "watch", 
            price : 10,
            qty : 7
        }, 
        {
            name : "gamepad", 
            price : 2, 
            qty : 2
        }
    ]
    const op = cart.reduce(function(accumulator,item){
        accumulator.totalAmount = item.price * item.qty + accumulator.totalAmount
         accumulator.totalQty = item.qty + accumulator.totalQty
        return accumulator
    },{totalAmount:0, totalQty : 0})
/* 
acc = {totalAmount : 0, totalQty : 0}
acc.totalAmount = 10 * 7 + 0 = 70 
acc.totalQty = 7 + 0 = 7 
{totalAmount : 70, totalQty : 7}

acc.totalAmount = 2 * 2 + 70 = 74 
acc.totalQty = 2 + 7 = 9 
{totalAmount:74, totalQty : 9}

*/


console.log(op)