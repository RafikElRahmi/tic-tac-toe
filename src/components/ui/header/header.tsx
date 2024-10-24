
interface HeaderProps {
    computer: boolean;
}
function Header({ computer }: HeaderProps) {
    /**TODO
     * handle wins score
     */
    return (
        <header className="absolute top-0 left-0  w-full h-[40px] bg-primary flex items-center justify-between px-2 sm:px-4">
            <div className="text-white">Player1</div>
            <div className="text-white">
               my score
            </div>
            <div className="text-white">
                {computer ? "Computer" : "Player2"}
            </div>
        </header>
    );
}

export default Header;
