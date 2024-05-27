// ======================================= Q# 3 =========================================================

// ------------------------------------ COMPANY-PRODUCT-CATALOG ---------------------------------


// ===================================== STEP# 1 ========================================

const inventory:{
    name:string;
    model:string;
    cost:number;
    quantity:number;
} []=[];

// ==================================== STEP# 2 ==========================================

const product1 ={
    name:"Laptop",
    model:"Dell",
    cost: 85000,
    quantity: 60,
};

const product2 ={
    name:"EarPots",
    model:"Oppo",
    cost: 5000,
    quantity: 30,
};

const product3 ={
    name:"SmartPhone",
    model:"Infinix",
    cost: 39000,
    quantity: 20,
};

// ===================================== STEP# 3 ==========================================

inventory.push(product1,product2,product3);

// ==================================== STEP# 4 ===========================================

console.log(`The quantity of ${inventory[1].name} is ${inventory[1].quantity}`);

// ==================================== STEP# 5 ===========================================

const newProduct1 ={
    name: "HeadPhone",
    model :"Oppo",
    cost: 2500,
    quantity: 65,
};

inventory.push(newProduct1);
console.log(`The cost of ${inventory[3].name} is ${inventory[3].cost}`);

const newProduct2 ={
    name: "Watch",
    model: "Apple", 
    cost: 55000,
    quantity: 20,
};

inventory.push(newProduct2);
console.log(`The price of ${inventory[4].name} is ${inventory[4].cost}`);