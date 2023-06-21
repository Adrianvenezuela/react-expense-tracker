import { useGlobalState } from "../../context/GlobalState";

export default function Transactionlist() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}