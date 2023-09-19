// // 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// // თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// // არა "უარყოფითია"

// const positiveNum = (num) => {
//     if(num === 0)  return "ნულია"
//     else if(num > 0) return 'დადებითია';
//     return "უარყოფითი"
// }
// // console.log(positiveNum(0))

// // 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// // 1 დან 100 მდე

// const equalNums = () => {
//     let num = 0;
//     for (let i = 0; i <= 100; i++) {
//         num += i
//     }
//     return num;
// }

// // console.log(equalNums())

// // 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// // დააბრუნოს ეს ციფრი კენტია თუ ლუწი

// const isOddOrEven = (num) => {
//     if(num % 2 === 0) return "ლუწია"
//     else return "კენტია"
// }

// // console.log(isOddOrEven(2))

// // 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// // დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// // და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

// let car = {
//     model: "BMW",
//     year: 2000
// }

// const carModelFunc = (car_data) => {
//     const currentDate = new Date().getFullYear();
//     const carYear = car_data.year;

//     return currentDate - carYear
// }

// // console.log(carModelFunc(car))

// // 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// // მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// // მასივის უდიდესი ციფრი

// const numbers = [1,4,88,99, 2342424];
// const maxOrMinNum = (num) => {
//     return Math.min(...num);
// }
// // console.log(maxOrMinNum(numbers))
// // 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

// // 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// // ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// // მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"

// const reverseNum = (word) => {
//     return  word.split("").reverse().join("")
// }
// console.log(reverseNum("ერთი"))

// function myName(onClick,name,address){
//     console.log(name)
// }

// // myName("gega",21,false);

// const myName_2 = (num) => {
//     console.log(arguments)
// }

// myName_2("gega",21,false);

// fruits.forEach((item) => {
//     console.log(item);
// })

// const update = users.map((item) => {
//     return {
//         ...item,
//         isAdmin: true
//     }
// })

// console.log("old array", users);
// console.log("new array", update);

// const result = Object.assign({id: Math.random().toFixed(1)},users,{address: "Tbilisi"});

// console.log(result)

// const users = [{name: "Gega"}, {age: 21}];

// const filterLogic = users.findIndex(item => item.name === "Gega");

// console.log(filterLogic);

// class Book {
//     constructor(title,author,year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     displayDetails(){
//         return console.log(`this Book is ${this.title},author is ${this.author} and this year is ${this.year}`)
//     }
// }

// const newBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)

// newBook.displayDetails()

// const dataRequest  = async () => {
//     try {
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach((item) => {
//             const app = document.getElementById('app');
//             const ul = document.createElement("ul");
//             const li = document.createElement("li");

//             li.innerText = item.address.city;
//             ul.appendChild(li);
//             app.appendChild(ul)
//         })

//     })
//     } catch (error) {
//         console.log(error)
//     }

// }

// dataRequest()

// import { colors } from "./themes/color.js";

// const h1 = document.getElementById("h1");
// const button = document.getElementById("button");

// button.addEventListener("click",() => {
//     h1.style.color = colors.blue;
// })

// const submit = document.getElementById("submit");

// submit.addEventListener("click", () => {
//   const inputValue = document.getElementById('myInput').value;

//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const data = {
//       inputData: inputValue
//   };

//   fetch(url, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log(data);
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });
// })

// 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
// და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში.

// function dataRequest(){
//     return fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         const newNames = data.map(item => item.username);
//         return newNames;
//     })
// }
// dataRequest().then(datas => {
//     console.log(datas)
// })

// 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
// და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
// მანქანის დეტალების შემაჯამებელ სტრიქონს.

// class Car {
//     constructor(model,company,year){
//         this.model = model;
//         this.company= company;
//         this.year = year;
//     }

//     getCarDetails(){
//         return `this car is ${this.model},${this.company}, ${this.year}`
//     }
// }

// const newClass = new Car("Model s", "Tesla",2018);

// console.log(newClass.getCarDetails())

// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
// შექმენით კლასის პოსტი თვისებების ID,
// სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე.

// class Post {
//     constructor(id,title,body){
//         this.id = id;
//         this.title = title;
//         this.text = body;
//     }
// }

// function myData(){
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => {
//          const newPost = data.map(item =>  new Post(item.id, item.title, item.body))
//          return newPost;
//     })
// }

// myData().then(dataRequest => {
//     console.log(dataRequest)
// })

// შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
// გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
//გამოიყენეთ filter მეთოდი!!

// const obj = [
//   {
//     name: "nika",
//     age: 21,
//   },
//   {
//     name: "dato",
//     age: 24,
//   },
//   {
//     name: "luka",
//     age: 17,
//   },
//   {
//     name: "saba",
//     age: 14,
//   },
// ];

// const newObj = obj.filter(item => item.age >= 18);
// console.log(newObj)

// 5.ამ Todo API-დან https://jsonplaceholder.typicode.com/todos,
// შექმენით კლასი Todo,რომელშიც აღწერილი მექნება: ID, title და completed.
// შემდეგ გაფილტრეთ მხოლოდ დასრულებული სამუშაოები Todo ობიექტების მასივში.

// class Todo {
//     constructor (id , title, completed){
//         this.id = id;
//         this.title = title;
//         this.completed = completed;
//     }
// }

// function myFilteredData(){
//     return fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(res => res.json())
//         .then(todo => {
//             const todos = todo.map(item => item);
//             const filteredTodo = todos.filter(to => to.completed);
//             return filteredTodo
//         })

// }

// myFilteredData().then(data_array => {
//     console.log(data_array)
// })

// import { obj } from "./data/data.js";
// import { colors } from "./themes/color.js";

// const heading = document.getElementById("heading");

// heading.style.color = colors.red;

// const myData = obj.map(item => {
//     return item.name
// })

// console.log(myData);

// const promises = new Promise((resolve,reject) => {
//     if(2 > 1){
//         setTimeout(() => {
//             resolve('success!!');
//         }, 3000)
//     }else {
//         setTimeout(() => {
//             reject("error!!")
//         }, 3000)
//     }
// })

// promises.then(res => {
//     console.log(`resolved ${res}`);
// }).catch(err => {
//     console.log(`rejected ${err}`)
// })

// const button = document.getElementById("submit");

// button.addEventListener("click", () => {
//     const input = document.getElementById("input").value;

//     const url = "https://jsonplaceholder.typicode.com/users";

//     const objData = {
//         inputValue: input
//     }
//     fetch(url, {
//         method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(objData)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         alert(err)
//     })
// })

// const form = document.getElementById("form");
// const submit = document.getElementById("submit");
// const displayData = document.getElementById("displayData");

// submit.addEventListener("click", (event) => {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const lastName = document.getElementById("lastName").value;

//   localStorage.setItem("name", name);
//   localStorage.setItem("lastName", lastName);

//   form.style.display = "none";

//   displayData.innerHTML = `${localStorage.getItem(
//     "name"
//   )} ${localStorage.getItem("lastName")}`;
// });


// const heading = document.getElementById("heading_1");

// const h1 = document.createElement("h1");
// h1.innerHTML = "Victor Crest";

// document.body.appendChild(h1)