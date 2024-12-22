import { Button, Modal, Select } from "../../shared";
import { useGlobalState } from "../../../context";
import React from "react";

const options = [
    { value: 3, label: "3 x 3" },
    { value: 4, label: "4 x 4" },
    { value: 5, label: "5 x 5" },
];
const StartModal = () => {
    const {
        setRows,
        setComputer,
        resetCases,
        setWins,
        openModalStart,
        setOpenModalStart,
    } = useGlobalState();

    const handleClick = (isComputer: boolean) => {
        setComputer(isComputer);
        resetCases();
        setOpenModalStart(false);
        setWins({ x: 0, o: 0 });
    };



    return (
        <Modal isOpen={openModalStart} title="Start new game">
            <div className="flex-center gap-3 p-3 flex-col w-[80vw] sm:!w-[250px]">
                <Select
                    options={options}
                    initialValue={3}
                    onChange={(v) => setRows(v as number)}
                    className="w-full"
                />
                <Button onClick={() => handleClick(false)} className="w-full">
                    1 vs 1
                </Button>
                <Button onClick={() => handleClick(true)} className="w-full">
                    vs computer
                </Button>
            </div>
        </Modal>
    );
};

export default React.memo(StartModal);
