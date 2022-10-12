let x = myFunction(4,3);

function myFunction (a,b){
    console.log(a*b);
}

let user = fullname('haura');

function fullname(fnama){
    console.log(fnama);
}

function myname({fnama,lname,email}){
    const fullname = `${fnama}${lname}${email}`;
    console.log(fullname);
}

myname({fnama: 'haura ', lname:'ahnaf ', email:'haura@gmail.com'});