
function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }
    return y;

}

var z=x();
console.log(z);



/*output:
function y()
{
    console.log(a);
}
7
*/



function x()
{
    var i=1;
    setTimeout(function ()
    {
        console.log(i);
    }, 1000);
}