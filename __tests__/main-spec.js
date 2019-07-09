const mainMethod = require('../main');

//---------isBarCodeExist---Test------------------//


var itemDatas = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];


var barcodes1 = ['0001', '0003', '0005', '0003'];
var barcodes2 = [];
var barcodes3 = ['0001', '0003', '0105', '0003'];


var receipts = "Receipts\n" +
    "------------------------------------------------------------\n" +
    "Coca Cola  3  1\n" +
    "Pepsi-Cola  5  2\n" +
    "Dr Pepper  7  1\n" +
    "------------------------------------------------------------\n" +
    "Price: 20";

var errorResult = "[ERROR]:";


//---------isBarCodesExist--test-------//
it ('should return true when call isBarCodesExist given barcodes1 and itemDatas', () => {
    expect(mainMethod.isBarCodesExist(barcodes1, itemDatas)).toBe(true);
});

it ('should return false when call isBarCodesExist given barcodes2 and itemDatas', () => {
    expect(mainMethod.isBarCodesExist(barcodes2, itemDatas)).toBe(false);
});

it ('should return false when call isBarCodesExist given barcodes3 and itemDatas', () => {
    expect(mainMethod.isBarCodesExist(barcodes3, itemDatas)).toBe(false);
});


//---------caculateBarcodes--test-------//
it ('should return result when call caculateBarcodes given barcodes1 and itemDatas', () => {
    expect(mainMethod.caculateBarcodes(mainMethod.isBarCodesExist(barcodes1,itemDatas),barcodes1, itemDatas)).toBe(receipts);
});


it ('should return "[ERROR]:" when call caculateBarcodes given barcodes2 and itemDatas', () => {
    expect(mainMethod.caculateBarcodes(mainMethod.isBarCodesExist(barcodes2,itemDatas),barcodes2, itemDatas)).toBe(errorResult);
});

it ('should return "[ERROR]:" when call caculateBarcodes given barcodes3 and itemDatas', () => {
    expect(mainMethod.caculateBarcodes(mainMethod.isBarCodesExist(barcodes3,itemDatas),barcodes3, itemDatas)).toBe(errorResult);
});




//---------printReceiptsByBarcodes--test-------//
it ('should return result when call printReceiptsByBarcodes given barcodes1 and itemDatas', () => {
    expect(mainMethod.printReceiptsByBarcodes(barcodes1,itemDatas)).toBe(receipts);
});


it ('should return "[ERROR]:" when call printReceiptsByBarcodes given barcodes2 and itemDatas', () => {
    expect(mainMethod.printReceiptsByBarcodes(barcodes2,itemDatas)).toBe(errorResult);
});

it ('should return "[ERROR]:" when call printReceiptsByBarcodes given barcodes3 and itemDatas', () => {
    expect(mainMethod.printReceiptsByBarcodes(barcodes3, itemDatas)).toBe(errorResult);
});

