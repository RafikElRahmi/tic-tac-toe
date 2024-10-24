interface BorderProps {
    children: React.ReactNode;
    color?: string;
    classname?: string;
}
function LinearBox({
    children,
    color = "green-pink-gradient",
    classname,
}: BorderProps) {
    return (
        <div className={`p-[1.5px] rounded-md ${color} ${classname || ""}`}>
            {children}
        </div>
    );
}

export default LinearBox;
