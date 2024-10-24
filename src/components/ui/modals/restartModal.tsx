import { useState } from "react";
import { Button, Modal } from "../../shared";

const RestartModal = () => {
    const [open, _setOpen] = useState<boolean>(true);
    /**TODO
     * handle modal based on game state
     * keep track on wins
     * handle reset on leave
     * handle who is the winner or its draw
     * appear on draw
     */
    const handleClick = () => {
        console.log("something");
    };
    return (
        <Modal isOpen={open} title="winner is palyer1">
            <div className="flex-center gap-3 p-3 flex-col w-[80vw] sm:!w-[250px]">
                <Button onClick={() => handleClick()} className="w-full">
                    Restart
                </Button>
                <Button onClick={() => handleClick()} className="w-full">
                    Menu
                </Button>
            </div>
        </Modal>
    );
};

export default RestartModal;
