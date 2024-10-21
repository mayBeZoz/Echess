"use client"

import { TPiece } from "@/types"
import Piece from "./Piece"
import { useBoardProvider } from "@/contexts/BoardProvider"

type TSlotProps = {
    value:TPiece,
    order:string
}

function Slot({order,value}:TSlotProps) {
    const row = +order.split('-')[0]
    const slot = +order.split('-')[1]

    const isRowEven = row%2 === 0 
    const isSlotEven = slot%2 === 0 

    const boardData = useBoardProvider()
    const isSlotAvailable = boardData?.availableSlots.find(curr => curr === order)
    const isSlotCanBeTaken = boardData?.piecesCanTake.find(curr => curr === order)

    const slotColor = 
    (isRowEven && isSlotEven && "bg-white hover:bg-slate-300") || 
    (isRowEven && !isSlotEven && "bg-zinc-500 hover:bg-zinc-600") || 
    (!isRowEven && isSlotEven && "bg-zinc-500 hover:bg-zinc-600") || 
    (!isRowEven && !isSlotEven && "bg-white hover:bg-slate-300")

    return (
        <>  
            <div slot-pos={order} className="relative w-[calc(100%/8)]">
                <div className={`
                        pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20
                        ${isSlotAvailable &&'bg-green-600/50 w-[30px] aspect-square rounded-full'} 
                        ${boardData?.handledPiece?.position === order || isSlotCanBeTaken && 'bg-green-600/50 w-full h-full'}
                    `}
                />
                <div className={`flex text-2xl justify-center items-center aspect-square ${slotColor}`}/>
            </div>
            { value !== "empty" && <Piece value={value} order={order}/> }
        </>
    )
}

export default Slot