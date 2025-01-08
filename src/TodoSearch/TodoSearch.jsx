import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch(){
  const {setsearchValue,searchValue} = React.useContext(TodoContext)
  return (
     <input placeholder="ejemplo: 'pasear al cachorro'" className="TodoSearch" value={searchValue} onChange={(event) => 
      {
        setsearchValue(event.target.value)
      }
     }/>
  );
}

export {TodoSearch}