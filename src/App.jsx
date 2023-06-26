import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import Transactionlist from "./components/transactions/transactionList";
import IncomeExpenses from "./components/incomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center item-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex">
          <div>
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <Transactionlist />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
