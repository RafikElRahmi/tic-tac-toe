import { useGlobalState } from "../../../context";

interface HeaderProps {}
function Header({}: HeaderProps) {
    const { wins, computer } = useGlobalState();
    if (wins === null) return null;
    return (
        <header className="absolute top-0 left-0  w-full h-[40px] bg-primary flex items-center justify-between px-2 sm:px-4">
            <div className="txt">Player1</div>
            <div className="txt">
                {wins.x} - {wins.o}
            </div>
            <div className="txt">
                {computer ? "Computer" : "Player2"}
            </div>
        </header>
    );
}

export default Header;
