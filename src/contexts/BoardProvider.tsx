'use client'

import { 
    TBoardProviderData, 
    Children, 
    TPiece, 
    THandledPiece, 

} from "@/types";

import { createContext, useContext, useEffect, useState } from "react";
import boardData from "@/data/board.json"
import { getPieceMovement } from "@/utils";

const Context = createContext<TBoardProviderData>(undefined)

export default function BoardProvider ({children}:Children) {

    const [board,setBoard] = useState<TPiece[][]>(boardData as TPiece[][])
    const [handledPiece,setHandledPiece] = useState<THandledPiece>(null)
    const [availableSlots,setAvailableSlots] = useState<string[]>([])

    useEffect(()=>{
        if (handledPiece) {
            setAvailableSlots(getPieceMovement(handledPiece,board))
        }
    },[handledPiece])

    useEffect(()=>{
        setBoard(boardData as TPiece[][]) // will be removed soon , just used to remove vercel deploy error
    },[])

    return (
        <Context.Provider value={{
            board,
            handledPiece,
            setHandledPiece,
            availableSlots
        }}>
            {children}
        </Context.Provider>
    )
}


export const useBoardProvider = () => useContext(Context)