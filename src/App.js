import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import ShowCampaigns from "./component/ShowCampaigns";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="mt-10">
                <CreateCampaign />
                <ShowCampaigns/>
            </main>
        </div>
    );
}

export default App;
