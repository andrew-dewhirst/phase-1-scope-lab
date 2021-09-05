var customerName = 'bob';
const leastFavoriteCustomer = 'andrew';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
    bestCustomer = name;
}

function changeLeastFavoriteCustomer(name) {
    leastFavoriteCustomer = name;
}
