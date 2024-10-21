import { ReactNode } from "react"

declare type Children = {
    readonly children: ReactNode
}

declare type TBlackPiece = "B-rook" | "B-bishop" | "B-knight" | "B-queen" | "B-king" | "B-pawn"
declare type TWhitePiece = "W-rook" | "W-bishop" | "W-knight" | "W-queen" | "W-king" | "W-pawn"

declare type TPiece = TBlackPiece | TWhitePiece | "empty"

declare type THandledPiece = {
    position:string,
    type:TBlackPiece | TWhitePiece
} | null

declare type TBoard = TPiece[][]

declare type TBoardProviderData = {
    board: TBoard,
    handledPiece: THandledPiece,
    setHandledPiece: (p:THandledPiece) => void,
    availableSlots:string[],
    piecesCanTake:string[]
} | undefined