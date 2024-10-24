export type CaseState = "x" | "o" | "";
export interface CaseCoords {
    x: number;
    y: number;
}

export type CaseItem = [CaseCoords, CaseState];

export type CasesItems = CaseItem[];

export interface Wins {
    x: number;
    o: number;
}