import { TBoard } from "@/types"
import { getBishopMovement } from "./bishop"
import { getRookMovement } from "./rook"

type params = {
    board:TBoard,
    pieceCol:number,
    pieceRow:number,
    pieceColor:string,
}

export const getQueenMovement = (p:params) => {
    const {availableSlots:s1,piecesCanTake:p1} = getRookMovement(p)
    const {availableSlots:s2,piecesCanTake:p2} = getBishopMovement(p)
    return {
        availableSlots:[...s1,...s2],
        piecesCanTake:[...p1,...p2]
    }
}