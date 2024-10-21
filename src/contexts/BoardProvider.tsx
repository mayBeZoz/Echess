'use client'

import { 
    TBoardProviderData, 
    Children, 
    TPiece, 
    THandledPiece,
    TCurrentTurn, 

} from "@/types";

import { createContext, useContext, useEffect, useState } from "react";
import boardData from "@/data/board.json"
import { getPieceMovement } from "@/utils";

const Context = createContext<TBoardProviderData>(undefined)

export default function BoardProvider ({children}:Children) {

    const [board,setBoard] = useState<TPiece[][]>(boardData as TPiece[][])
    const [handledPiece,setHandledPiece] = useState<THandledPiece>(null)
    const [availableSlots,setAvailableSlots] = useState<string[]>([])
    const [piecesCanTake,setPiecesCanTake] = useState<string[]>([])
    const [isCurrKingChecked,setIsCurrKingChecked] = useState<boolean>(false)
    const [currentTurn,setCurrentTurn] = useState<TCurrentTurn>("white")

    useEffect(()=>{
        if (handledPiece) {
            const {availableSlots,piecesCanTake} = getPieceMovement(handledPiece,board)
            setAvailableSlots(availableSlots)
            setPiecesCanTake(piecesCanTake)
        }else { 
            setAvailableSlots([])
        }
    },[handledPiece])

    const moveHandledPieceTo = (row:number,col:number) => {
        const canMoveToThisPos = [...availableSlots,...piecesCanTake].find(curr => curr === `${row}-${col}`)

        if (handledPiece && canMoveToThisPos) {
            const newBoard = [...board];
            newBoard[row][col] = handledPiece.type
            const handledPieceRow = +handledPiece.position.split("-")[0]
            const handledPieceCol = +handledPiece.position.split("-")[1]
            newBoard[handledPieceRow][handledPieceCol] = "empty"

            setBoard(newBoard)
            setHandledPiece(null)
            setPiecesCanTake([])
            setAvailableSlots([])
        }
    }


    return (
        <Context.Provider value={{
            board,
            handledPiece,
            setHandledPiece,
            availableSlots,
            piecesCanTake,
            currentTurn,
            moveHandledPieceTo
        }}>
            {children}
        </Context.Provider>
    )
}


export const useBoardProvider = () => useContext(Context)