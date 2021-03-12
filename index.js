const challengeFunction = function(kingWhite, rookBlack, bishopBlack, knightBlack){
    /* YOUR CODE HERE */
    let arrkingWhite= []
    let arrRookBlack=[]
    let arrBishopBlack=[]
    let arrKnightBlack=[]
    let bishopLetter = bishopBlack.split("")[0]
    let bishopNumber = bishopBlack.split("")[1]
    let kingWhiteLetter = kingWhite.split("")[0];
    let kingWhiteNumber = kingWhite.split("")[1];
    let knightBlackLetter = knightBlack.split("")[0];
    let knightBlackNumber = knightBlack.split("")[1];
    let rookBlackLetter = rookBlack.split("")[0];
    let rookBlackNumber = rookBlack.split("")[1];
    const letterArray= ["A","B","C","D","E","F","G","H"]
//bishop
    letterArray.forEach(letter => {
        let distanciaLetras = letterArray.indexOf(bishopLetter)-letterArray.indexOf(letter)
        let newNumberPos= bishopNumber-distanciaLetras
        let newNumberNeg= bishopNumber-distanciaLetras
        let newPosicionPos= letter+newNumberPos
        let newPosicionNeg= letter+newNumberNeg
        arrBishopBlack=[...arrBishopBlack,newPosicionNeg,newPosicionPos]
    });
//knight
    letterArray.forEach(letter => {
        let distanciaLetras = letterArray.indexOf(knightBlackLetter)-letterArray.indexOf(letter)
        if (distanciaLetras == 1){
            let newNumberPos= knightBlackNumber+2
            let newNumberNeg= knightBlackNumber-2
            let newPosicionPos= letter+newNumberPos
            let newPosicionNeg= letter+newNumberNeg
            arrKnightBlack=[...arrKnightBlack,newPosicionNeg,newPosicionPos]
        }else if(distanciaLetras == 2){
            let newNumberPos= knightBlackNumber+1
            let newNumberNeg= knightBlackNumber-1
            let newPosicionPos= letter+newNumberPos
            let newPosicionNeg= letter+newNumberNeg
            arrKnightBlack=[...arrKnightBlack,newPosicionNeg,newPosicionPos]
        }
    });
//rook
    letterArray.forEach(letter => {
        arrRookBlack = [...arrRookBlack,letter+rookBlackNumber]
    });
    for(var i = 1; i <= 8; i++){
        arrRookBlack = [...arrRookBlack,rookBlackLetter+i]
    }

//king

    letterArray.forEach(letter => {
        let distanciaLetras = letterArray.indexOf(kingWhiteLetter)-letterArray.indexOf(letter)
        if (distanciaLetras == 1){
            let newNumberPos= kingWhiteNumber+1
            let newNumberNeg= kingWhiteNumber-1
            let newPosicionPos= letter+newNumberPos
            let newPosicionNeg= letter+newNumberNeg
            let newPosicionNeutro= letter+kingWhiteNumber
            arrkingWhite=[...arrkingWhite,newPosicionNeg,newPosicionPos,newPosicionNeutro]
        }
        if (distanciaLetras == 0){
            let newNumberPos= kingWhiteNumber+1
            let newNumberNeg= kingWhiteNumber-1
            let newPosicionPos= letter+newNumberPos
            let newPosicionNeg= letter+newNumberNeg
            arrkingWhite=[...arrkingWhite,newPosicionNeg,newPosicionPos]
        }
    });


    arrkingWhite = arrkingWhite.filter(pos => arrBishopBlack.includes(pos)|| arrKnightBlack.includes(pos) || arrRookBlack.includes(pos))

    console.log("lenght " +  arrkingWhite.length )
    result = arrkingWhite.length > 0 ? "jaque" : "jaque mate";


    return result
}

module.exports = challengeFunction
