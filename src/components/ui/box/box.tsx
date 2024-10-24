import { useGlobalState } from "../../../context";
import { CaseCoords } from "../../../types";
import { LinearBox } from "../../shared";
import { Case } from "./case";

interface MainBoxProps {}

const MainBox = ({}: MainBoxProps) => {
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
                {cases.map((c) => {
                    return (
                        <Case
                            key={JSON.stringify(c[0])}
                            caseState={c}
                            onClick={handleClick}
                            disabled={computerRunning}
                        />
                    );
                })}
            </div>
        </LinearBox>
    );
};
export default MainBox;
