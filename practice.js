/*const asmi=(para1, para2)=>
{
    console.log("asmi");

}

asmi();

let arr=["pune", "delhi", "mumbai"];
arr.forEach((val, idx, arr)=>{          //tske callback func as parameter
    console.log(val, idx, arr);
});


let nums=[2,3,4,5];

nums.forEach((num)=>
{
    console.log(num*num);
    
});

console.dir(window.document);

let ans=document.getElementById("headline");
console.log(ans);


console.dir(ans);

let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+ "form apna college student";


let a=document.querySelectorAll(".box");
a[0].innerText="formed";

let idx=1;
for(div of a)
{
    div.innerText=`new formed ${idx}`;
    idx++;
    
}

let newbtn=document.createElement("button");
newbtn.innerText="click me!";
newbtn.style.backgroundColor="red";

//SELECTING THE BODY TAG AND THEN PREPEND THE BUTTON
document.querySelector("body").prepend(newbtn);

let para=document.querySelector("p");

para.setAttribute("class", "newClass");

para.classList.add("newClass");*/

function x()
{
    console.log(this);

    function y()
    {
        console.log(this);
    }
    y();
}

x();


const person={
    name: "Akshay",
};

x.call(person);



const person2={
    name: "Akshay",
};

x.call(person);






