import React, { useContext, useState } from "react";

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_OPERATION_LOGS,
} from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "Created event",
      operatedAt: timeCurrentIso8601,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("Are you sure about deleting all events?");
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: "All events are deleted",
        operatedAt: timeCurrentIso8601,
      });
    }
  };
  const unCreateble = title === "" || body === "";

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
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
          <button
            className="btn btn-primary"
            onClick={addEvent}
            disabled={unCreateble}
          >
            イベントを作成する
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteAllEvents}
            disabled={state.events.length == 0}
          >
            全てのイベントを削除する
          </button>
        </div>
      </form>
    </>
  );
};
