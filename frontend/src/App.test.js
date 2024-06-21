import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from './App';
import HomePage from "./pages/home";
import { MemoryRouter } from "react-router-dom";

test('render the app',()=>{
    render(<HomePage />, { wrapper: MemoryRouter });
  expect(screen.getByTestId("testing-circle")).toBeInTheDocument();
});