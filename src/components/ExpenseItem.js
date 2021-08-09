import './ExpenseItem.css'

function ExpenseItem() {
  const expanseDate = new Date(2021, 2, 28);
  const expanseTitle = 'Car Insurance';
  const expanseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expanseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expanseTitle}</h2>
        <div className="expense-item__price">${expanseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
