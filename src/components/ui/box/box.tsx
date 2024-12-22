import React, { useMemo } from "react";
import { useGlobalState } from "../../../context";
import { CaseCoords } from "../../../types";
import { LinearBox } from "../../shared";
import { Case } from "./case";

interface MainBoxProps {}

const MainBox = React.memo(({}: MainBoxProps) => {
    const { rows, cases, fill, computerRunning } = useGlobalState();
    const handleClick = (c: CaseCoords) => {
        fill(c);
    };
    return (
        <LinearBox classname="!py-[1.5px] !px-0 sm:!p-[1.5px] rounded-none sm:rounded-md">
            <div
                className="box-content"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${rows}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gap: "10px",
                }}>
                { cases.map((c) => {
                    const Memorized = useMemo(
                        () => c,[c[1]]
                    );
                    return (
                        <Case
                            key={JSON.stringify(Memorized[0])}
                            caseStateId={Memorized[0]}
                            caseStateValue={Memorized[1]}
                            onClick={handleClick}
                            disabled={computerRunning}
                        />
                    );
                })}
            </div>
        </LinearBox>
    );
})
export default MainBox;
