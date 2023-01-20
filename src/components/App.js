import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { initialState, reducer } from '../reducers/index.reducer.js';
import { calculateValue, clearScreen, deleteDigit, displayNum } from '../actions/index.actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const change = (e) => {

     dispatch(displayNum(e.target.value))
     console.log(state)
  }

  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.screen}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => {}} value={"M+"}/>
              <CalcButton onClick={() => {}} value={"MR"}/>
              <CalcButton onClick={() => {}} value={"MC"}/>
              <CalcButton onClick={() => {
                dispatch(clearScreen())
              }} value={"CE"}/>
            </div>

            <div className="row">
              <CalcButton onClick={change} value={1}/>
              <CalcButton onClick={change} value={2}/>
              <CalcButton onClick={change} value={3}/>
              <CalcButton onClick={change} value={"+"}/>
            </div>

            <div className="row">
              <CalcButton onClick={change} value={4}/>
              <CalcButton onClick={change} value={5}/>
              <CalcButton onClick={change} value={6}/>
              <CalcButton onClick={change} value={"*"}/>
            </div>

            <div className="row">
              <CalcButton onClick={change} value={7}/>
              <CalcButton onClick={change} value={8}/>
              <CalcButton onClick={change} value={9}/>
              <CalcButton onClick={change} value={"-"}/>
            </div>

            <div className="row">
              <CalcButton onClick={change} value={0} />
              <CalcButton onClick={() => dispatch(deleteDigit())} value={"DEL"}/>
              <CalcButton onClick={change} value={"/"}/>
              <CalcButton onClick={() => dispatch(calculateValue())} value={"="} />
            </div>

            <div className="row">

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
