
function isBarCodesExist(barcodes,itemDatas){

    if(barcodes.length == 0){
        return false;
    }

    var judge = 0;
    for(let i = 0;i < barcodes.length;i++){
        judge = 0;
        for(let j = 0;j < itemDatas.length;j++){
            if(barcodes[i] == itemDatas[j]["id"]){
                judge = 1;
                break;
            }
        }
        if(judge == 0){
            return false;
        }
    }

    return true;

}




function caculateBarcodes(isExist,barcodes,itemDatas){

    var result = [];

    if(!isExist){
        return "[ERROR]:";
    }

    else{

        for(let i = 0;i < barcodes.length;i++){
            for(let j = 0;j < itemDatas.length;j++){

                if(barcodes[i] == itemDatas[j]["id"]){

                    var index = -1;
                    for(let k = 0;k < result.length;k++){
                        if(barcodes[i] == result[k]["id"]){
                            index = k;
                            break;
                        }
                    }

                    if(index >= 0){  //if exist,add 1 directly
                        result[index]["amount"]++;
                    }

                    else{           //if not exist,need to create a new object
                        var temp = itemDatas[j];
                        temp["amount"] = 1;
                        result.push(temp);
                        break;
                    }

                }
            }
        }

        return getStringFromObjectArray(result);

    }
}


function getStringFromObjectArray(objectArray) {

    var result = "Receipts"+"\n"+"------------------------------------------------------------\n";
    var totalPrice = 0;
    for(let i = 0;i < objectArray.length;i++){
        result += objectArray[i]["name"]+"  "+ objectArray[i]["price"] +"  "+ objectArray[i]["amount"]+"\n";
        totalPrice += objectArray[i]["price"] * objectArray[i]["amount"];
    }
    result += "------------------------------------------------------------\n"+"Price: "+totalPrice;
    return result;

}



function printReceiptsByBarcodes(barcodes,itemDatas) {
    var result = isBarCodesExist(barcodes,itemDatas);
    return caculateBarcodes(result,barcodes,itemDatas);
}

module.exports = {
    isBarCodesExist,
    caculateBarcodes,
    printReceiptsByBarcodes
};