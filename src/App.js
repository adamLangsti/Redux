import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions/index';

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      {isLogged ? <h3>Valuable info I shouldn't see'</h3> : ''}
    </div>
  );
}

export default App;
