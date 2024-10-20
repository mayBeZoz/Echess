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


    const slotColor = 
    (isRowEven && isSlotEven && "bg-white hover:bg-slate-300") || 
    (isRowEven && !isSlotEven && "bg-black hover:bg-zinc-600") || 
    (!isRowEven && isSlotEven && "bg-black hover:bg-zinc-600") || 
    (!isRowEven && !isSlotEven && "bg-white hover:bg-slate-300")



    return (
        <>
            <div slot-pos={order} className={`w-[calc(100%/8)] flex text-2xl justify-center items-center aspect-square ${slotColor} ${isSlotAvailable && "!bg-red-600"}`}/>
            { value !== "empty" && <Piece value={value} order={order}/> }
        </>
    )
}

export default Slot