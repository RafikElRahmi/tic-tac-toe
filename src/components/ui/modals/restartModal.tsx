import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Modal } from "../../shared";
import { useGlobalState } from "../../../context";

interface RestartModalProps {
    pause?: boolean;
    setPause?: Dispatch<SetStateAction<boolean>>
}
const RestartModal = ({ pause, setPause }: RestartModalProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const { result, resetCases, ResetGame } = useGlobalState();
    useEffect(() => {
        if (result) {
            setOpen(true);
        }
    }, [result]);
    const handleClick = (controller: boolean) => {
        if (pause) {
            setPause?.(false);
        }
        setOpen(false);
        if (controller) {
            ResetGame();
        } else {
            resetCases();
        }
    };

    const handleContinue = () => {
        setOpen(false);
        setPause?.(false);
    };
    useEffect(() => {
        if (pause) {
            setOpen(true);
        }
    }, [pause]);

    return (
        <Modal isOpen={open} title={result as string}>
            <div className="flex-center gap-3 p-3 flex-col w-[80vw] sm:!w-[250px]">
                {pause && (
                    <Button onClick={handleContinue} className="w-full">
                        Continue
                    </Button>
                )}
                <Button onClick={() => handleClick(false)} className="w-full">
                    Restart
                </Button>
                <Button onClick={() => handleClick(true)} className="w-full">
                    Menu
                </Button>
            </div>
        </Modal>
    );
};

export default React.memo(RestartModal);
