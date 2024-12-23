import React, { Fragment, useState } from "react";
import RestartModal from "./restartModal";
import { useGlobalState } from "../../../context";

const PauseModal = () => {
    const { wins } = useGlobalState();
    const [open, setOpen] = useState<boolean>(false);
    if (!wins) return null;

    return (
        <Fragment>
            <button
                onClick={() => setOpen(true)}
                className="absolute bottom-10 right-10 w-10 h-10 txt font-bold text-xl bg-primary rounded-full ">
                {"| |"}
            </button>
            <RestartModal pause={open} setPause={setOpen} />
        </Fragment>
    );
};

export default React.memo(PauseModal);
