import { CaseCoords, CasesItems } from "../types";

type Axe = Record<string, number>;
function createAxe(rows: number): Axe {
    return Object.fromEntries(Array.from({ length: rows }, (_, i) => [i, 0]));
}

export function getInitialCases(rows: number): CasesItems {
    let cases: CasesItems = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            cases.push([{ x: i, y: j }, ""]);
        }
    }
    return cases;
}

const checkPlayer = (data: CaseCoords[], rows: number): boolean => {
    const n = +rows;
    const x = createAxe(n);
    const y = createAxe(n);
    let linearLeft = 0;
    let linearRight = 0;
    for (const element of data) {
        x[element.x] += 1;
        if (x[element.x] === n) {
            return true;
        }
        y[element.y] += 1;
        if (y[element.y] === n) {
            return true;
        }
        if (element.x === element.y) {
            linearLeft += 1;
            if (linearLeft === n) {
                return true;
            }
        }
        if (element.x === -element.y) {
            linearRight += 1;
            if (linearRight === n) {
                return true;
            }
        }
    }
    return false;
};

export const isWinner = (data: CasesItems, rows: number) => {
    const player1: CaseCoords[] = [];
    const player2: CaseCoords[] = [];
    data.forEach((element) => {
        if (element[1] === "x") {
            player1.push(element[0]);
        } else if (element[1] === "o") {
            player2.push(element[0]);
        }
    });

    const isX = checkPlayer(player1, rows);
    if (isX) {
        return "x";
    }
    const isY = checkPlayer(player2, rows);
    if (isY) {
        return "o";
    }
    return null;
};

export function isDraw(cases: CasesItems): boolean {
    return cases.every((caseItem) => caseItem[1] !== "");
}

export function getRandomCase(cases: CasesItems): CaseCoords {
    const emptyCases = cases.filter(c => c[1] === "")
    const randomIndex = Math.floor(Math.random() * emptyCases.length)
    return emptyCases[randomIndex][0]
}