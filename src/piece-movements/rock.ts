import { TBoard } from "@/types"

type params = {
    board:TBoard,
    pieceCol:number,
    pieceRow:number,
    pieceColor:string,
}


export const getRockMovement = ({board,pieceCol,pieceColor,pieceRow}:params) => {
    let availableSlots:string[] = []

    //loop from left side or rock

    for (let i = 0;i < pieceCol;i++) {
        const currSlot = board[pieceRow][i]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            availableSlots.push(`${pieceRow}-${i}`)
        }else {
            availableSlots = []
            if (!isCurrentPieceSameColor) {
                availableSlots.push(`${pieceRow}-${i}`)
            }
        }
    }

    //loop from right side or rock

    for (let i = pieceCol+1;i < board[pieceRow].length;i++) {
        const currSlot = board[pieceRow][i]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            availableSlots.push(`${pieceRow}-${i}`)
        }else {
            if (!isCurrentPieceSameColor) {
                availableSlots.push(`${pieceRow}-${i}`)
            }
            break
        }
    }
    
    // check top slots

    let topSlots:string[] = []
    for (let currRow = 0; currRow < pieceRow;currRow++) {
        const currSlot = board[currRow][pieceCol]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            topSlots.push(`${currRow}-${pieceCol}`)
        }else {
            topSlots = []
            if (!isCurrentPieceSameColor) {
                topSlots.push(`${currRow}-${pieceCol}`)
            }
        }
    }
    availableSlots = [...availableSlots,...topSlots]

    // check bottom slots


    let bottomSlots:string[] = []
    for (let currRow = pieceRow+1; currRow < board.length;currRow++) {
        const currSlot = board[currRow][pieceCol]
        const isCurrentPieceSameColor = currSlot.split("-")[0] === pieceColor
        if (currSlot === "empty") {
            bottomSlots.push(`${currRow}-${pieceCol}`)
        }else {
            if (!isCurrentPieceSameColor) {
                bottomSlots.push(`${currRow}-${pieceCol}`)
                break
            }
        }
    }
    availableSlots = [...availableSlots,...bottomSlots]


    return availableSlots
}