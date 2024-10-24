import { MainPage } from "./pages";
import { CasesStateProvider } from "./context";

function App() {
    return (
        <CasesStateProvider>
                <MainPage />
        </CasesStateProvider>
    );
}

export default App;
