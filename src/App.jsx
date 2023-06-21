import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import Transactionlist from "./components/transactions/transactionList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <Transactionlist />
      <h1>Hello World</h1>
    </GlobalProvider>
  );
}

export default App;
