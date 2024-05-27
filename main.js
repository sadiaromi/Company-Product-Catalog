// ======================================= Q# 3 =========================================================
// ------------------------------------ COMPANY-PRODUCT-CATALOG ---------------------------------
// ===================================== STEP# 1 ========================================
var inventory = [];
// ==================================== STEP# 2 ==========================================
var product1 = {
    name: "Laptop",
    model: "Dell",
    cost: 85000,
    quantity: 60,
};
var product2 = {
    name: "EarPots",
    model: "Oppo",
    cost: 5000,
    quantity: 30,
};
var product3 = {
    name: "SmartPhone",
    model: "Infinix",
    cost: 39000,
    quantity: 20,
};
// ===================================== STEP# 3 ==========================================
inventory.push(product1, product2, product3);
// ==================================== STEP# 4 ===========================================
console.log("The quantity of ".concat(inventory[1].name, " is ").concat(inventory[1].quantity));
// ==================================== STEP# 5 ===========================================
var newProduct1 = {
    name: "HeadPhone",
    model: "Oppo",
    cost: 2500,
    quantity: 65,
};
inventory.push(newProduct1);
console.log("The cost of ".concat(inventory[3].name, " is ").concat(inventory[3].cost));
var newProduct2 = {
    name: "Watch",
    model: "Apple",
    cost: 55000,
    quantity: 20,
};
inventory.push(newProduct2);
console.log("The price of ".concat(inventory[4].name, " is ").concat(inventory[4].cost));
