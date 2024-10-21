import { TBoard } from "@/types"

type params = {
    board:TBoard,
    pieceCol:number,
    pieceRow:number,
    pieceColor:string,
}

export const getKnightMovement = ({board,pieceCol,pieceColor,pieceRow}:params):string[] => {
    const availableSlots:string[] = []

    const positions = [
        {
            row:pieceRow+1,
            col:pieceCol+2
        },
        {
            row:pieceRow-1,
            col:pieceCol+2
        },
        {
            row:pieceRow+1,
            col:pieceCol-2
        },
        {
            row:pieceRow-1,
            col:pieceCol-2
        },
        {
            row:pieceRow+2,
            col:pieceCol+1
        },
        {
            row:pieceRow+2,
            col:pieceCol-1
        },
        {
            row:pieceRow-2,
            col:pieceCol+1
        },
        {
            row:pieceRow-2,
            col:pieceCol-1
        },
    ]


    positions.forEach(pos => {
        const currSlot = board[pos.row]?.[pos.col]
        const isCurrPieceSameColor = currSlot?.split("-")[0] === pieceColor
        if (currSlot && !isCurrPieceSameColor) {
            availableSlots.push(`${pos.row}-${pos.col}`)
        }
    })
    console.log(availableSlots)

    return availableSlots 
}