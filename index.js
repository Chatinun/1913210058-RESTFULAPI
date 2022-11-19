//const datefns = require('date-fns');

//console.log(datefns.format(new Date(),'MM/dd/yyyy'));

//console.log('Hello World!');

// let firstName = 'Chatinun';
// let age = 21;

//console.log(firstName + age);

// let info = `
//     My name is ${firstName}
//     My age is ${age}
// `

// console.log(info);

const user = {
    name: 'Chatinun',
    salary: 1000000,
    address: {
        province : "Bangkok",
        postcode : 10250
    }
};

//console.log(user.address.postcode);

const ShowData = () => `${user.name}`;
//console.log(ShowData());

const ShowData2 = () => {
    let info = 'My name is'
    return `${info} ${user.name}`
};
//console.log(ShowData2());

const SumNumber = (a,b) => a + b;
//console.log(SumNumber(10,5));

const {name, salary, address:{postcode}} = user;
console.log(postcode);
