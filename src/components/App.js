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
      <h4>イベント作成フォーム</h4>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Title
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Body
          </label>
          <textarea
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={addEvent} disabled={unCreateble}>イベントを作成する</button>
          <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length == 0}>全てのイベントを削除する</button>
        </div>
      </form>

      <h4>イベント一覧</h4>
     
    </div>
  );
};
export default App;
