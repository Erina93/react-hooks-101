import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "../contexts/AppContext";
import reducers from "../reducers";
const App = () => {
  const initialState ={
    events:[],
    operationLogs:[]

  }
  const [state, dispatch] = useReducer(reducer, initialState) 
  return (
    <div className="container-fluid">
      

      <h4>イベント一覧</h4>
     
    </div>
  );
};
export default App;
