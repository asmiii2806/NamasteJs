const asmi=(para1, para2)=>
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
