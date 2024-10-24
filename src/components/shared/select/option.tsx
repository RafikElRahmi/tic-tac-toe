export interface OptionProps {
    value: string | number;
    label: string;
}
const Option = ({ value, label }: OptionProps) => {
    return <option value={value} className="text-center">{label}</option>;
};

export default Option;
