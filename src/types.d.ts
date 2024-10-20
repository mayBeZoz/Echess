import { ReactNode } from "react"

declare type Children = {
    readonly children: ReactNode
}

declare type TBlackPiece = "B-rock" | "B-bishop" | "B-horse" | "B-queen" | "B-king" | "B-solider"
declare type TWhitePiece = "W-rock" | "W-bishop" | "W-horse" | "W-queen" | "W-king" | "W-solider"

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
    availableSlots:string[]
} | undefined