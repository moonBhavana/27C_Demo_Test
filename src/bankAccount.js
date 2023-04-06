import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, credit } from './action';
import './index.css';

const BankAccount = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance);
  let [amount,setAmount]=useState(0);

  const handleDeposit = (event) => {

    event.preventDefault();
    // const amount = Number(event.target.amount.value);
    // console.log(event)
    // const amount = Number(event.target.value);
    console.log("amount is:" + amount);
    dispatch(deposit(eval(amount)));


  };

  const handleCredit = (event) => {
    event.preventDefault();
    // const amount = Number(event.target.amount.value);
    // const amount = Number(event.target.value);
    dispatch(credit(eval(amount)));
  };

  return (
    <div className="bank-account">
      <h2>Bank Account Balance: {balance}</h2>
      <form onSubmit={handleDeposit}>
        <label htmlFor="deposit-amount">Deposit Amount:</label>
        <input id="deposit-amount" type="number" name="amount" data-testid="depositId" onChange={
          (e)=>setAmount(e.target.value)
        }/>

        <button type="submit" data-testid="b1">Deposit</button>
      </form>
      <form onSubmit={handleCredit}>
        <label htmlFor="credit-amount">Credit Amount:</label>
        <input id="credit-amount" type="number" name="amount" data-testid="creditId" onChange={
          (e)=>setAmount(e.target.value)
        }/>
        <button type="submit">Credit</button>
      </form>
    </div>
  );
};

export default BankAccount;