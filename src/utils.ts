import { getRockMovement } from "./piece-movements/rock";
import { TBlackPiece, TBoard, TWhitePiece } from "./types";

type TPieceInfo = {
    type:TWhitePiece|TBlackPiece,
    position:string
}



export const getPieceMovement = (piece:TPieceInfo,board:TBoard) :string[] => {
    const pieceColor = piece.type.split("-")[0]
    const pieceType = piece.type.split("-")[1]

    const row = +piece.position.split("-")[0]
    const col = +piece.position.split("-")[1]


    if (pieceType === "rock") {
        return getRockMovement({
            board,
            pieceCol:col,
            pieceColor,
            pieceRow:row
        })
    }

    return []
}