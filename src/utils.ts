import { getBishopMovement } from "./piece-movements/bishop";
import { getKnightMovement } from "./piece-movements/knight";
import { getQueenMovement } from "./piece-movements/queen";
import { getRookMovement } from "./piece-movements/rook";
import { TBlackPiece, TBoard, TWhitePiece } from "./types";

type TPieceInfo = {
    type:TWhitePiece|TBlackPiece,
    position:string
}



export const getPieceMovement = (piece:TPieceInfo,board:TBoard) => {
    const pieceColor = piece.type.split("-")[0]

    const row = +piece.position.split("-")[0]
    const col = +piece.position.split("-")[1]

    const params = {
        board,
        pieceCol:col,
        pieceColor,
        pieceRow:row
    }

    switch(piece.type) {
        case "W-rook":
            return getRookMovement(params)
        case "W-bishop":
            return getBishopMovement(params)
        case "W-knight":
            return getKnightMovement(params)
        case "W-queen":
            return getQueenMovement(params)
        case "W-king":
            return {
                availableSlots:[],
                piecesCanTake:[]
            }
        case "W-pawn":
            return {
                availableSlots:[],
                piecesCanTake:[]
            }
        case "B-rook":
            return getRookMovement(params)
        case "B-bishop":
            return getBishopMovement(params)
        case "B-knight":
            return getKnightMovement(params)
        case "B-queen":
            return getQueenMovement(params)
        case "B-king":
            return {
                availableSlots:[],
                piecesCanTake:[]
            }
        case "B-pawn":
            return {
                availableSlots:[],
                piecesCanTake:[]
            }
    }
    
  
}