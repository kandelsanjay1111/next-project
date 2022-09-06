import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import Home from "../pages/index";

describe('<Home/>',()=>{
    describe("links",()=>{
        jest.mock('next/link',()=>({children})=>children);
        it('should contain login link',()=>{
            render(<Home/>);
            const loginButton=screen.getByText(/Login/);
            expect(loginButton.closest('a')).toHaveAttribute('href','/login');
        });
        it('should contain the register link',()=>{
            render(<Home/>);
            const registerButton=screen.getByText(/Register/);
            expect(registerButton.closest('a')).toHaveAttribute('href','/signin');
        })
    })
})