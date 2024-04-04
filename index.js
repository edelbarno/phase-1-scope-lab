// Write your solution in this file!
var customerName ='bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return;
}

function setBestCustomer(bestCustomer){
  window.bestCustomer='not bob';
}

function overwriteBestCustomer(bestCustomer){
 window.bestCustomer='maybe bob';
}

const leastFavoriteCustomer = '';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'hated customer'
return;
}
