import { TBoard } from "@/types"

type params = {
    board:TBoard,
    pieceCol:number,
    pieceRow:number,
    pieceColor:string,
}

const getTopLeftMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []

    //loop over top left side
    let currRow = pieceRow -1 
    let currCol = pieceCol -1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor
        
        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                slots.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow--
        currCol--
    }

    return slots
}


const getTopRightMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []

    //loop over top right side
    let currRow = pieceRow -1
    let currCol = pieceCol +1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor

        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                slots.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow--
        currCol++
    }
    return slots
}




const getBottomRightMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []

    //loop over bottom right side
    let currRow = pieceRow +1
    let currCol = pieceCol +1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor

        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                slots.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow++
        currCol++
    }
    return slots
}

const getBottomLeftMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []

    //loop over bottom left side
    let currRow = pieceRow +1
    let currCol = pieceCol -1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor

        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                slots.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow++
        currCol--
    }
    return slots
}

export const getBishopMovement = (p:params):string[] => {
    
    const topLeftSlots = getTopLeftMovements(p)
    const topRightSlots = getTopRightMovements(p)
    const bottomRightSlots = getBottomRightMovements(p)
    const bottomLeftSlots = getBottomLeftMovements(p)
    return [
        ...topLeftSlots,
        ...topRightSlots,
        ...bottomRightSlots,
        ...bottomLeftSlots
    ]
}
