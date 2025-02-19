const Expenses = ({ expenses }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Gastos</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category}: {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;