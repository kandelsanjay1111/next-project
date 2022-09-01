import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import '@testing-library/jest-dom/extend-expect';

describe("App", () => {
  it('Check if app run',()=>{
    render(<Home/>);
    const title=screen.getByText(/Welcome to Our Blog/);
    expect(title).toBeInTheDocument();
  });

  it('check the login button',()=>{
    render(<Home/>);
    const loginButton=screen.getByText(/Login/);
    expect(loginButton).toBeInTheDocument();
  })

  it('check the register button',()=>{
    render(<Home/>);
    const registerButton=screen.getByText(/Register/);
    expect(registerButton).toBeInTheDocument();
  })
})