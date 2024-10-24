import { Fragment } from "react";
import { Header, MainBox, PauseModal, RestartModal, StartModal } from "../components";

interface MainProps {}
const MainPage = ({}: MainProps) => {
    return (
        <Fragment>
            <Header/>
            <main>
                <MainBox />
            </main>
            <RestartModal />
            <StartModal />
            <PauseModal/>
        </Fragment>
    );
};

export default MainPage;
