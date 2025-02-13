import React from "react";

export const HelloWorld: React.FC = () => {
  const name = "Stephany";
  const age = 25;
  
  const person = {
    name, 
    age,   
  };
  
  
  return <h1>`${person.name}`</h1>;
}