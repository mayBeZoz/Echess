import { TBoard } from "@/types"

type params = {
    board:TBoard,
    pieceCol:number,
    pieceRow:number,
    pieceColor:string,
}


export const getRookMovement = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    
    //loop from left side of rock

    let leftSlots:string[] = []
    let leftPiecesCanTake:string[] = []
    for (let i = 0;i < pieceCol;i++) {
        const currSlot = board[pieceRow][i]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            leftSlots.push(`${pieceRow}-${i}`)
        }else {
            leftSlots = []
            leftPiecesCanTake = []
            if (!isCurrentPieceSameColor) {
                leftPiecesCanTake.push(`${pieceRow}-${i}`)
            }
        }
    }

    //loop from right side or rock
    const rightSlots:string[] = []
    const rightPiecesCanTake:string[] = []
    for (let i = pieceCol+1;i < board[pieceRow].length;i++) {
        const currSlot = board[pieceRow][i]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            rightSlots.push(`${pieceRow}-${i}`)
        }else {
            if (!isCurrentPieceSameColor) {
                rightPiecesCanTake.push(`${pieceRow}-${i}`)
            }
            break
        }
    }
    
    // check top slots

    let topSlots:string[] = []
    let topPiecesCanTake:string[] = []
    for (let currRow = 0; currRow < pieceRow;currRow++) {
        const currSlot = board[currRow][pieceCol]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            topSlots.push(`${currRow}-${pieceCol}`)
        }else {
            topSlots = []
            topPiecesCanTake = []
            if (!isCurrentPieceSameColor) {
                topPiecesCanTake.push(`${currRow}-${pieceCol}`)
            }
        }
    }

    const bottomSlots:string[] = []
    let bottomPiecesCanTake:string = ''
    for (let currRow = pieceRow+1; currRow < board.length;currRow++) {
        const currSlot = board[currRow][pieceCol]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            bottomSlots.push(`${currRow}-${pieceCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                bottomPiecesCanTake = `${currRow}-${pieceCol}`
            }
            break
        }
    }


    return {
        availableSlots:[...topSlots,...leftSlots,...rightSlots,...bottomSlots],
        piecesCanTake:[bottomPiecesCanTake,...topPiecesCanTake,...rightPiecesCanTake,...leftPiecesCanTake]
    }
}