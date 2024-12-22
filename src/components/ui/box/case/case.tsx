import React from "react";
import { CaseCoords, CaseItem, CaseState } from "../../../../types";
import { LinearBox } from "../../../shared";

interface CaseProps {
    caseStateId: CaseCoords;
    caseStateValue: CaseState;
    onClick?: (_c: CaseCoords) => void;
    disabled: boolean;
}
const Case = React.memo(
    ({ caseStateId, caseStateValue, onClick, disabled }: CaseProps) => {
        const caseState: CaseItem = [caseStateId, caseStateValue];
        console.log("case", caseState);
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
    }
);
export default Case;
