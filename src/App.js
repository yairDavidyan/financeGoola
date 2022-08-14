import TabsFinance from "./components/TabsFinance";
import { financeList } from "./financeList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <TabsFinance financeList={financeList} />
    </>
  );
}

export default App;
