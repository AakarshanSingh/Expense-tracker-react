
import ExpenseDate from './ExpeneseDate';
import './ExpenseItems.css';

const ExpenseItems=(props)=> { 

  
  return (
  
    <div className="expense-item">

        <ExpenseDate date= {props.date}></ExpenseDate>

        <div className="expense-item__description" >
              <h2>{props.title}</h2>
              <div  className='expense-item__price'>
                  Rs {props.amount}</div>
        </div>
      
      </div>
  );
}
export default ExpenseItems;
