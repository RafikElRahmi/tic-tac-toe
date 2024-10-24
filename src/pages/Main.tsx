import { Fragment, useState } from "react";
import { Header, MainBox, RestartModal, StartModal } from "../components";
import { getInitialCases } from "../utils";
import { CasesItems } from "../types";

interface MainProps {}
const MainPage = ({}: MainProps) => {
    /** todo
     * Manage the entire page's logic efficiently.
     * Encapsulate business logic within appropriate components.
     * Optimize for performance (consider caching, minimizing iterations, etc.).
     * should add global context to manage related states
     */
    const [rows, setRows] = useState<number>(5);
    const [cases, setCases] = useState<CasesItems>(getInitialCases(rows));
    return (
        <Fragment>
            <Header computer={true}/>
            <main className="txt">
                <MainBox rows={rows} cases={cases} />
            </main>
            <RestartModal />
            <StartModal />
        </Fragment>
    );
};

export default MainPage;
