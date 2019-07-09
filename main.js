
function isBarCodesExist(barcodes,itemDatas){

    if(barcodes.length == 0){
        return false;
    }

    for(let i = 0;i < barcodes.length;i++){
        for(let j = 0;j < itemDatas.length;j++){
            if(barcodes[i] == itemDatas[j]["id"]){
                continue;
            }
        }
        return false;
    }

    return true;

}




function caculateBarcodes(isExist,barcodes,itemDatas){
    if(!isExist){
        return "[ERROR]:";
    }
    else{
        var result = "Receipts"+"/n"+"------------------------------------------------------------"
        
        for(let i = 0;i < barcodes.length;i++){
            
        }
    }
}