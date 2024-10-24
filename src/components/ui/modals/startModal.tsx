import { useState } from "react";
import { Button, Modal, Select } from "../../shared";

const options = [
    { value: 3, label: "3 x 3" },
    { value: 4, label: "4 x 4" },
    { value: 5, label: "5 x 5" },
];
const StartModal = () => {
    const [open, _setOpen] = useState<boolean>(true);
    /**TODO
     * handle modal based on game state
     * reset state on appear
     */
    const handleClick = () => {
        console.log("something");
    };
    return (
        <Modal isOpen={open} title="Start new game">
            <div className="flex-center gap-3 p-3 flex-col w-[80vw] sm:!w-[250px]">
                <Select options={options} initialValue={3} className="w-full" />
                <Button onClick={() => handleClick()} className="w-full">
                    1 vs 1
                </Button>
                <Button onClick={() => handleClick()} className="w-full">
                    vs computer
                </Button>
            </div>
        </Modal>
    );
};

export default StartModal;
