import { LinearBox } from "../../../shared";

interface CaseProps {
    caseState: string;
    onClick?: () => void;
}
const Case = ({ caseState, onClick }: CaseProps) => {
    return (
        <LinearBox>
            <button
                className="bg-bgDark rounded-md flex-center text-white w-full h-full font-bold text-4xl"
                onClick={() => onClick?.()}>
                {caseState}
            </button>
        </LinearBox>
    );
};
export default Case;
