import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HelloWorld } from "./index"; 

test("deve renderizar o texto 'Olá Mundo!'", () => {
  render(<HelloWorld />);
  const elemento = screen.getByText("Olá Mundo!");
  expect(elemento).toBeInTheDocument();
});