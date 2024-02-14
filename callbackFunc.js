//CALL BACK FUNCTION -->WE CAN PASS FUCNTION INTO ANPTHER FUNCTION THAT FUNCTION IS CALL BACK FUNCTION
// WHICH WE ARE PASSING
//IT GIVES ACCESS TO THE WHOLE ASYNC LANG TO SYNC SINGLE THREADED LANG



// SET TIMER OPERATION CANT BE POSSSIBLE WITHOUT THESE CALL BACK FUNCTIONS
setTimeout(function {}, {    console.log("timer");
}, 5000);
function x()
{
    console.log("x");
}

xx(function y()     //this y function is call back funcion
{
    console.log("y");

})