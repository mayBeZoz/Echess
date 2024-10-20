import { useBoardProvider } from "@/contexts/BoardProvider";
import { TBoardProviderData } from "@/types";
import { useEffect } from "react";

export const useMovePiece = (pieceRef:React.RefObject<HTMLDivElement>,slotRef:React.RefObject<HTMLDivElement>) => {

    const boardData: TBoardProviderData = useBoardProvider()
    const boardRects = boardData?.boardClientRects?.item(0)

    useEffect(()=>{
        const p = pieceRef.current
        const slot = slotRef.current
        if (p && boardRects && slot) {
            const onMouseMove = (e:MouseEvent) => {
                const x = e.pageX - p.offsetWidth/2;
                const y = e.pageY - p.offsetHeight/2;
                p.style.left = x + 'px';
                p.style.top = y + 'px';
            };
        
            const onMouseDown = () => {
                p.style.position = 'absolute';
                document.addEventListener('mousemove', onMouseMove);
            };
        
            const onMouseUp = (e:any) => {
                document.removeEventListener('mousemove', onMouseMove);
                
                // const relativeTop = e.pageY - boardRects.top;
                // const relativeLeft = e.pageX - boardRects.left;
                // const isMouseInXBoard = relativeLeft >= 0 && relativeLeft <= boardRects.width
                // const isMouseInYBoard = relativeTop >= 0 && relativeTop <= boardRects.height
                // if (isMouseInYBoard && isMouseInXBoard) {
                //     const slotXIndex = (relativeLeft / boardRects.width)*8
                //     const slotYIndex = (relativeTop / boardRects.height)*8
                    console.log(e.currentTarget?.getAttribute("slot-pos"))
                    
                // }else {
                //     p.style.position = 'relative';
                //     p.style.left = 0 + 'px';
                //     p.style.top = 0 + 'px';
                // }
            };
        


            p.addEventListener('mousedown', onMouseDown);
            slot.addEventListener('mouseup', onMouseUp);
        
            return () => {
                p.removeEventListener('mousedown', onMouseDown);
                slot.removeEventListener('mouseup', onMouseUp);
            };
        }
    },[boardData])
}