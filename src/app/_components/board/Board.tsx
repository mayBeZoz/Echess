"use client"

import { useBoardProvider } from "@/contexts/BoardProvider"
import { TBoardProviderData } from "@/types"
import Slot from "./Slot"

function Board() {

    const boardData: TBoardProviderData = useBoardProvider()

    return (
        <div className='w-[1000px] relative flex flex-wrap aspect-square'>
            {
                boardData?.board?.flat().map((slot,idx) => {
                    const cols = boardData.board.length
                    const row = Math.floor(idx / cols); 
                    const col = idx % cols; 
                    return (
                        <Slot key={idx} order={`${row}-${col}`} value={slot}/>
                    )
                })
            }
        </div>
    )
}

export default Board