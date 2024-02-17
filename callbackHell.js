const cart=["shoes", "pants"];

api.createOrder(cart,     )


function()
{
    api.proceedpayment()
}

function()
{
    api.walletupdate()
}

//|||||||||||>>>>>>


//CALL BACK HELL PYRAMID OF DOM

api.createOrder(cart, function()     // CALL BACK FUNCTION PASSED IN THIS 
{
    api.proceedpayment(function()
    {
        api.walletupdate()
    })

}    )



