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
    const col = +order.split('-')[1]
    const slot = +order.split('-')[1]
    const slotXPos = 100*((slot+1)/8)
    const slotYPos = 100*((row+1)/8)

    const canBeTaken = boardData?.piecesCanTake.find(curr => curr === order)

    const handleClick = () => {
        if (boardData?.handledPiece && canBeTaken) {
            boardData.moveHandledPieceTo(row,col)
        }else if (boardData?.handledPiece?.position !== order) {
            boardData?.setHandledPiece({
                type:value,
                position:order
            })
        } 
        
    }

    const color = value.split("-")[0]
    const type = value.split("-")[1]
    const imgURL = `/assets/pieces/${type}-${color.toLocaleLowerCase()}.svg`

    return (
        <div
            onClick={handleClick} 
            style={{
                left:`${slotXPos - (100*(1/8)/2)}%`,
                top:`${slotYPos - (100*(1/8)/2)}%`,
            }} 
            className={`absolute z-40 w-[calc(100%/8)] -translate-x-1/2 -translate-y-1/2 aspect-square`}
        >
            <img src={imgURL} alt={value} />
        </div>
    )
}

export default Piece