/*const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    updateWalletBalance(paymentInfo);
  });

*/
//USING ARROW FUCTION

let promise=new Promise((resolve, reject)=>
{
  console.log("I AM PROMISE");
}
);

//let promise1=promise();
promise1.then(()=>
{
  console.log("promise fulledliled");

});



promise1.then(()
{
  console.log("promise fulledliled");

});
