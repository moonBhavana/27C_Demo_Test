import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BankAccount from './bankAccount';
import reducer from './reducers';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

describe('BankAccount', () => {
  let store;
  // let initial_amount = 100;
  

  beforeEach(() => {
    store = createStore(reducer, { balance: 0 });
  });

  test('renders bank account balance', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BankAccount />
      </Provider>
    );
    expect(getByText('Bank Account Balance: 0')).toBeInTheDocument();
  });

  test('handles deposit credit 1', () => {
    // const { getByLabelText, getByText, getByRole } = 
    render(
      <Provider store={store}>
        <BankAccount />
      </Provider>
    );
  
     //////////////////////////////////////// Deposit //////////////////////////////////////////////

        expect(screen.getByRole("heading")).toHaveTextContent('Bank Account Balance:')
        const inputNode = screen.getByTestId('depositId')
        fireEvent.change(inputNode,{target:{value:100}});
        fireEvent.submit(screen.getByRole('button',{ name: /Deposit/i }));
        expect(screen.getByRole("heading").textContent).toEqual('Bank Account Balance: 100')

    ////////////////////////////////////////Credit after deposit//////////////////////////////////////////////

        const inputNode1 = screen.getByTestId('creditId')
        fireEvent.change(inputNode1,{target:{value:90}});
        fireEvent.submit(screen.getByRole('button',{ name: /Credit/i }));
        expect(screen.getByRole("heading").textContent).toEqual('Bank Account Balance: 10')

    
  });

  test('handles deposit credit 2', () => {
    render(
      <Provider store={store}>
        <BankAccount />
      </Provider>
    );
  
     //////////////////////////////////////// Deposit //////////////////////////////////////////////

        expect(screen.getByRole("heading")).toHaveTextContent('Bank Account Balance:')
        const inputNode = screen.getByTestId('depositId')
        fireEvent.change(inputNode,{target:{value:5000}});
        fireEvent.submit(screen.getByRole('button',{ name: /Deposit/i }));
        expect(screen.getByRole("heading").textContent).toEqual('Bank Account Balance: 5000')

    ////////////////////////////////////////Credit after deposit//////////////////////////////////////////////

    const inputNode1 = screen.getByTestId('creditId')
    fireEvent.change(inputNode1,{target:{value:900}});
    fireEvent.submit(screen.getByRole('button',{ name: /Credit/i }));
    expect(screen.getByRole("heading").textContent).toEqual('Bank Account Balance: 4100')

    
  });


  test('handles credit', () => {
    render(
      <Provider store={store}>
        <BankAccount />
      </Provider>
    );
 ////////////////////////////////////////Credit after if balance is 0//////////////////////////////////////////////
    const inputNode = screen.getByTestId('creditId')
    fireEvent.change(inputNode,{target:{value:90}});
    fireEvent.submit(screen.getByRole('button',{ name: /Credit/i }));
    expect(screen.getByRole("heading").textContent).toEqual('Bank Account Balance: -90')
   
  });
});
