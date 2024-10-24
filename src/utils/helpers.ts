import { CasesItems } from "../types";

export function getInitialCases(rows: number): CasesItems {
    let cases: CasesItems = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            cases.push([{ x: i, y: j }, ""]);
        }
    }
    return cases;
}
