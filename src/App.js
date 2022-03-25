import React, { useState, useEffect, useReducer, useRef } from "react";
import { closePopup } from "./utilitis";
import Card from "./Card";
import reducer from "./reducer";
import Popup from "./Popup";

import Values from "values.js";

const defaultState = {
  colorList: [],
  popupShow: false,
  popupText: "",
  popupType: "danger",
};

const App = () => {
  const [color, setColor] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const inputContainer = useRef(null);

  const formSubmit = (e) => {
    e.preventDefault();
    try {
      let newColor = new Values(color).all(10);
      dispatch({ type: "COMPILED_DATA", payload: newColor });
    } catch (Error) {
      setColor("");
      inputContainer.current.focus();
      dispatch({ type: "EMPTY_FEILD" });
    }
  };

  useEffect(() => {
    inputContainer.current.focus();
    dispatch({ type: "ON_STARTUP" });
    setColor("");
  }, []);

  return (
    <>
      <section>
        {state.popupShow && (
          <Popup {...state} dispatch={dispatch} closePopup={closePopup}></Popup>
        )}
        <header>
          <label htmlFor="input">color generate</label>
          <form className="form" onSubmit={formSubmit}>
            <div className="form-control">
              <input
                type="text"
                id="input"
                placeholder="#f85989"
                ref={inputContainer}
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
            <button type="submit">generate</button>
          </form>
        </header>
        <main>
          {state.colorList.map((color, index) => {
            return (
              <Card
                key={index}
                {...color}
                index={index}
                dispatch={dispatch}
                hex={color.hex}
              ></Card>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default App;
