import { useState } from "react";
import { btnVariant } from "../button";
import Option, { OptionProps } from "./option";

interface ISelectProps {
    variant?: btnVariant;
    onChange?: (selectedValue: OptionProps["value"]) => void;
    disabled?: boolean;
    className?: string;
    options: OptionProps[];
    initialValue?: OptionProps["value"];
}

const Select = ({
    variant = btnVariant.primary,
    onChange,
    disabled,
    className,
    options,
    initialValue,
}: ISelectProps) => {
    // Manage selected value state
    const [selectedValue, setSelectedValue] = useState<OptionProps["value"]>(
        initialValue || options[0].value
    );

    // Handle selection change
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value as OptionProps["value"];
        setSelectedValue(newValue);
        onChange?.(newValue);
    };

    return (
        <select
            value={selectedValue}
            onChange={handleChange}
            disabled={disabled}
            className={`btn-${variant} h-[40px] ${className || ""}`}>
            {options.map((option) => (
                <Option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                />
            ))}
        </select>
    );
};

export default Select;
