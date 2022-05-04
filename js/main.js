
var num = 45;
var name = "AP203";
var check = true;

console.log(typeof num)
console.log(typeof name)
console.log(check)

let nums = [45,10,50,100,"AP203",true];

console.log(typeof nums)

console.log("Nums:")
for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}

console.log("Items:")
for(let item of nums){
    console.log(item)
}



// if(checkAge){
//     alert(`${name1} ${surname1}, siz giris ede bilersiniz`)
// }
// else{
//     alert(`${name1} ${surname1}, siz giris ede bilmezsiniz`)
// }



// let checkAge;
// let name1;
// let surname1;
// do{
//     name1 = prompt("Ad:");
//     surname1 = prompt("Surname:")
//     checkAge = confirm(name1+" "+surname1 +", yasiniz 18+ dirmi?")
// }
// while(!checkAge)



// alert(`${name1} ${surname1}, siz giris ede bilersiniz`)


// let guestType;

// if(confirm("Muellimsinizmi?")){
//     guestType = "teacher"
// }
// else if(confirm("Iscisinizmi?")){
//     guestType = "worker"
// }
// else if(confirm("Telebesinizmi?")){
//     guestType = "student"
// }

// switch(guestType){
//     case "student":
//         alert("Giris ede bilmezsiniz!")
//         break;
//     case "teacher":
//         alert("1 saatliq daxil oal bilersiniz!")
//         break;
//     case "worker":
//         alert("Buyurun kecin!")
//         break;
//     default:
//         alert("Ne azarin var burda?")
//         break;
// }



function makeFullname(name, surname){
    return `${name} ${surname}`
}

function sum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(!isNaN(numbers[i])){
            sum+=Number(numbers[i])
        }
    }
    return sum;
}

let fullname = makeFullname("Hikmet","Abbasov")
console.log(fullname)

let result = sum([50,"fdf",10,20,"10","Fdfd"])

console.log("result: "+result) 


function sumOfNumbers(...numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
}

console.log(SumOfEven([10,15,20,25,30]))

function SumOfEven(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0)
            sum+=numbers[i];
    }
    return sum;
}

function SumOfOdd(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==1)
            sum+=numbers[i];
    }
    return sum;
}

function SumOfDividedBy3(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%3==0)
            sum+=numbers[i];
    }
    return sum;
}

function SumOfSelectedNumbers(numbers,check){
    if((typeof check) != 'function'){
        alert("Check is not a function")
        return;
    }
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(check(numbers[i]))
            sum+=numbers[i];
    }
    return sum;
}

let myFunc = function isEven(number){
    return number%2==0;
}
function isOdd(number){
    return number%2==1;
}


// result  = SumOfSelectedNumbers([10,15,13,7,33,30],"fdf");
// result  = SumOfSelectedNumbers([10,15,13,7,33,30],function(num){return num%5==0});
result  = SumOfSelectedNumbers([10,15,13,7,33,30],(x)=>x%3==0);


let student = {
    Name:"stdName",
    Surname: "stdSurname",
    Age:45,
    "Average of Exams":85
}

student.Age = 55;
student.Gender = "Male"

delete student.Age;

console.log("Student keys:")
for (const key in student) {
   console.log(`${key} - ${student[key]}`)
}

class User{
    constructor(name,surname,age){
        this.Name = name;
        this.Surname = surname;
        this.Age = age;
        this.showInfo = function(){
            console.log(`FullName: ${this.Name} ${this.Surname} - Age: ${this.Age}`)
        }
    }
}


let std1 = new User('Musvig','Sukurov',10);
let std2 = new User('Elnur','Zeynalov',13);
let std3 = new User('Rovsen','Emiraslanov',11);

std1.Gender = 'Male'
delete std2.Age;
std1.showInfo()
console.log(std1)
console.log(std2)
console.log(std3)


function Student(name,surname,age,point){
    this.Name = name;
    this.Surname = surname;
    this.Age = age;
    this.Point = point
}


class Employee extends User{
    constructor(name,surname,age,position,salary){
        super(name,surname,age);
        this.Position = position;
        this.Salary = salary;
    }
}

let std4 = new Student('Hikmet','Abbasov',20,85);

console.log(std4)

let emp1 = new Employee('Hikmet','Abbasov',45,'Doctor',2400);

console.log(emp1)











