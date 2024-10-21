import { getBishopMovement } from "./piece-movements/bishop";
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

    const params = {
        board,
        pieceCol:col,
        pieceColor,
        pieceRow:row
    }

    switch(piece.type) {
        case "W-rock":
            return getRockMovement(params)
        case "W-bishop":
            return getBishopMovement(params)
        case "W-knight":
        case "W-queen":
        case "W-king":
        case "W-pawn":
        case "B-rock":
            return getRockMovement(params)
        case "B-bishop":
            return getBishopMovement(params)
        case "B-knight":
        case "B-queen":
        case "B-king":
        case "B-pawn":
    }
    

    return []
}