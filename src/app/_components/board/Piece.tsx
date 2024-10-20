import { useBoardProvider } from '@/contexts/BoardProvider'
import { TBlackPiece, TWhitePiece } from '@/types'
import React from 'react'

type TPieceProps = {
    value:TWhitePiece|TBlackPiece,
    order:string
}

function Piece({order,value}:TPieceProps) {
    const boardData = useBoardProvider()

    const row = +order.split('-')[0]
    const slot = +order.split('-')[1]
    const slotXPos = 100*((slot+1)/8)
    const slotYPos = 100*((row+1)/8)


    const handleClick = () => {
        const handledPiece = boardData?.handledPiece?.type
        if (handledPiece !== value) {
            boardData?.setHandledPiece({
                type:value,
                position:order
            })
        }else {
            boardData?.setHandledPiece(null)
        }
    }



    return (
        <div
            onClick={handleClick} 
            style={{
                left:`${slotXPos - (100*(1/8)/2)}%`,
                top:`${slotYPos - (100*(1/8)/2)}%`,
                // transform:`translateX(${slotXPos - (100*(1/8)/2)}%) translateY(${slotYPos - (100*(1/8)/2)}%)`
            }} 
            className={`absolute w-[60px] -translate-x-1/2 -translate-y-1/2 aspect-square bg-orange-200`}
        >
            {value}
        </div>
    )
}

export default Piece