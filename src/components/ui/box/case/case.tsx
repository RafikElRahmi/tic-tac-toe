import { CaseCoords, CaseItem } from "../../../../types";
import { LinearBox } from "../../../shared";

interface CaseProps {
    caseState: CaseItem;
    onClick?: (_c: CaseCoords) => void;
    disabled: boolean;
}
const Case = ({ caseState, onClick, disabled }: CaseProps) => {
    return (
        <LinearBox>
            <button
                className="bg-bgDark rounded-md flex-center text-white w-full h-full font-bold text-4xl"
                onClick={() => onClick?.(caseState[0])}
                disabled={disabled || caseState[1] !== ""}>
                {caseState[1]}
            </button>
        </LinearBox>
    );
};
export default Case;
