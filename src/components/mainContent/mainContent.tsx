import { LeftSide } from "./leftSide"
import { RightSide } from "./rightSide"

export const MainContent = () => {

    return(
        <div className="flex max-w-[900px] mx-auto gap-[80px]">
            <LeftSide/>
        </div>
    )
}