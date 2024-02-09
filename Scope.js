function a()
{
    c();
    //but  we can't get the value of declared variable in function
    function c()
    {
        console.log(b);
        //we can get the value of b here inside this function as well.


    }
    

}

var b=10;
a();