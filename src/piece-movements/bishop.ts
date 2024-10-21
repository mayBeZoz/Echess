import { TBoard } from "@/types"

type params = {
    board:TBoard,
    pieceCol:number,
    pieceRow:number,
    pieceColor:string,
}

const getTopLeftMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []
    let piecesCanTake:string[] = []
    //loop over top left side
    let currRow = pieceRow -1 
    let currCol = pieceCol -1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor
        
        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                piecesCanTake.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow--
        currCol--
    }

    return {
        slots,
        piecesCanTake
    }
}


const getTopRightMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []
    let piecesCanTake:string[] = []

    //loop over top right side
    let currRow = pieceRow -1
    let currCol = pieceCol +1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor

        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                piecesCanTake.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow--
        currCol++
    }
    return {
        slots,
        piecesCanTake
    }
}




const getBottomRightMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []
    let piecesCanTake:string[] = []

    //loop over bottom right side
    let currRow = pieceRow +1
    let currCol = pieceCol +1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor

        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                piecesCanTake.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow++
        currCol++
    }
    return {
        slots,
        piecesCanTake
    }
}

const getBottomLeftMovements = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let slots:string[] = []
    let piecesCanTake:string[] = []

    //loop over bottom left side
    let currRow = pieceRow +1
    let currCol = pieceCol -1
    
    while (board[currRow]?.[currCol]) {
        const isCurrentPieceSameColor = board[currRow][currCol].split("-")[0] === pieceColor

        if (board[currRow][currCol] === "empty") {
            slots.push(`${currRow}-${currCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                piecesCanTake.push(`${currRow}-${currCol}`)
            }
            break
        }
        currRow++
        currCol--
    }
    return {
        slots,
        piecesCanTake
    }
}

export const getBishopMovement = (p:params) => {
    
    const {piecesCanTake:p1,slots:s1} = getTopLeftMovements(p)
    const {piecesCanTake:p2,slots:s2} = getTopRightMovements(p)
    const {piecesCanTake:p3,slots:s3} = getBottomRightMovements(p)
    const {piecesCanTake:p4,slots:s4} = getBottomLeftMovements(p)
    return {
        piecesCanTake:[...p1,...p2,...p3,...p4],
        availableSlots:[...s1,...s2,...s3,...s4]
    }
}
