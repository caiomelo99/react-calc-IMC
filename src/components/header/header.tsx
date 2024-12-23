import { Logo } from "./logo"

export const Header = () => {

    return (
        <header className="w-screen">
            <div className="max-w-[900px] mx-auto my-[40px] p-5 md:p-0"><Logo/></div>
        </header>
    )
}