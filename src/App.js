import React from "react";
import Navbar from "./components/Header/Header";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import { GlobalState } from "./global-state/GlobalState";

function App() {
  document.title = "Commonwealth Connect";
  const initialState={
     user: "Olena" 
  }

  const reducer = (state,action)=>{
    switch (action.type){
      case "changeUser":
        return {
          ...state,
          user: "not Olena"
        };
      default:
        return state;
    }
    }
  

  return( 
  <GlobalState initialState={initialState} reducer={reducer}>
    <Header />;
  </GlobalState>
  )
}

export default App;
