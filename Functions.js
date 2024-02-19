//HOW FUNCTIONS WORK

function myname()
{
    console.log("asmi");
}

myname();


const myvar=()=>
{
    console.log("asmi");

}
myvar();


str="asmi";
const mvar =(str )=>
{
    let count=0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i]=='a' || str[i]=='e'  || str[i]=='i' || str[i]=='o' || str[i]=='u')
        {
            count++;

        }
     
    }
    return countq;

}

//countvowels(str);
console.log(mvar(str));
































/*var x=1;
a();
b();
console.log(X);

function a()            //MEMORY ALLOCATED TO A FUNCTION
{
    var x=10;
    console.log(x);
}
function b()            //MEMORY ALLOCATED TO B FUNCTION
{
    var x=100;
    console.log(x);
    
}
/*OUTPUT

10
100
1       

CALL STACK 
X: UNDEFINED       next phase     => x=1;

a: { whole function }
b:{ whole func}
 
exectuion context formed memory allocated and x : undefined
now pushed in cll stack 
a() in call stack n
now in code part var x= 10;
so x becomes 10 now
now console log will print 10
NOW THIS A FUNCTION REMOVED FROM CLL STACK

POINTER GOES TO LINE 5 NOW 
IN SECOND FUNCTION B
INVOKING FUNCTION ...EXEC CONTEXT CREATED

NOW SAME GOES AND VALUE OF X => PRINTED 100
NOW THIS A FUNCTION REMOVED FROM CLL STACK

NOW  LINE 6 EXECTUED 
X=1 PRINTED 
SO NOW END..
WHOLE EXECUTION CONTEXT DELETED */