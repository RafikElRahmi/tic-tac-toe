export enum btnVariant {
    primary = "primary",
    secondary = "secondary",
}
interface IButtonProps {
    variant?: btnVariant;
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
const Button = ({
    variant = btnVariant.primary,
    children,
    onClick,
    disabled,
    className,
}: IButtonProps) => {
    return (
        <button
            onClick={() => {
                onClick?.();
            }}
            disabled={disabled}
            className={`btn-${variant} ${className || ""}`}>
            {children}
        </button>
    );
};

export default Button;
