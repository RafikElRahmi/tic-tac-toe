import { createContext, useState, useCallback, useContext } from "react";
import { CaseCoords, CaseItem, CasesItems, Wins } from "../types";
import { getInitialCases, isWinner, isDraw, getRandomCase } from "../utils";
import { useTimeout } from "../hooks";

const CasesContext = createContext({
    cases: [] as CasesItems,
    setCases: (_cases: CasesItems) => {},
    resetCases: () => {},
    ResetGame: () => {},
    computer: false,
    setComputer: (_isComputer: boolean) => {},
    rows: 3,
    setRows: (_n: number) => {},
    wins: null as null | Wins,
    setWins: (_w: null | Wins) => {},
    fill: (_c: CaseCoords) => {},
    result: null as null | string,
    openModalStart: true,
    setOpenModalStart: (_isOpen: boolean) => {},
    computerRunning: false,
});

function CasesStateProvider({ children }: { children: React.ReactNode }) {
    const [rows, setRows] = useState<number>(3);
    const [computer, setComputer] = useState<boolean>(false);
    const [initialCases, setInitialCases] = useState<CasesItems>(
        getInitialCases(rows)
    );
    const [cases, setCases] = useState<CasesItems>(initialCases);
    const [wins, setWins] = useState<null | Wins>(null);
    const [result, setResult] = useState<null | string>(null);
    const [nextFill, setNextFill] = useState<"x" | "o">("x");
    const [openModalStart, setOpenModalStart] = useState<boolean>(true);
    const [computerRunning, setComputerRunning] = useState<boolean>(false);

    //adjust rows
    const handleRows = (row: number) => {
        if (row != rows) {
            setRows(row);
            const newCases = getInitialCases(row);
            setInitialCases(newCases);
            setCases(newCases);
        }
    };

    //on restart
    const resetCases = useCallback(() => {
        setCases(initialCases);
        setResult(null);
    }, [initialCases]);

    //on reset
    const ResetGame = () => {
        handleRows(3);
        setResult(null);
        setWins(null);
        setOpenModalStart(true);
        setNextFill("x");
    };

    //minimize re-render on computer re-set
    const handleComputer = (c: boolean) => {
        if (computer !== c) {
            setComputer(c);
        }
    };

    //check if match done
    const checkMatchEnd = (mutateCases: CasesItems) => {
        const win = isWinner(mutateCases, rows);
        if (win && wins !== null) {
            const w = { ...wins, [win]: wins[win] + 1 };
            setWins(w);
            const res =
                win === "x"
                    ? "Player1 won"
                    : computer
                    ? "Computer won"
                    : "Player2 won";
            setResult(res);
            return true;
        }
        const draw = isDraw(mutateCases);
        if (draw) {
            setResult("Draw");
            return true;
        }
        return false;
    };

    //Computer click
    const { startTimeout } = useTimeout((mutateCases) => {
        const randomCase = getRandomCase(mutateCases);
        fill(randomCase, true);
        setComputerRunning(false);
    }, 1000);

    //fill case
    const fill = (c: CaseCoords, auto: boolean = false) => {
        const mutateCases = [...cases].map((cas) => {
            if (cas[0].x === c.x && cas[0].y === c.y) {
                return [cas[0], nextFill] as CaseItem;
            }
            return cas;
        });
        setCases(mutateCases);

        const isDone = checkMatchEnd(mutateCases);
        if (computer) {
            if (isDone) {
                setNextFill("x");
            } else if (auto) {
                setNextFill("x");
            } else {
                setComputerRunning(true);
                startTimeout(mutateCases);
                setNextFill("o");
            }
        } else {
            setNextFill(nextFill === "x" ? "o" : "x");
        }
    };

    const value = {
        cases,
        setCases,
        resetCases,
        computer,
        setComputer: handleComputer,
        rows,
        setRows: handleRows,
        wins,
        setWins,
        fill,
        result,
        ResetGame,
        openModalStart,
        setOpenModalStart,
        computerRunning,
    };

    return (
        <CasesContext.Provider value={value}>{children}</CasesContext.Provider>
    );
}

export const useGlobalState = () => {
    const context = useContext(CasesContext);
    return context;
};
export default CasesStateProvider;
