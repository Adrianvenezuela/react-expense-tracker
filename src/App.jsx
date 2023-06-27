import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import Transactionlist from "./components/transactions/transactionList";
import IncomeExpenses from "./components/incomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center item-center">
        <div className="container mx-auto w2/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <h1 className="text-4x1 font-bold">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full">
              <ExpenseChart />
              <Transactionlist />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
