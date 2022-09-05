import * as firebase from "@firebase/testing";
import "@testing-library/jest-dom";
import { screen,render } from "@testing-library/react";
// import login from '../pages/login';
import {AuthContextProvider} from '../Components/Context/AuthContext'

describe('login',()=>{
    it('renders the login',async()=>{
        firebase.initializeTestApp({
            projectId:"frontend-rnd-daf7d",
            auth:{uid:"vPHE0HNeOEWUtk52b5T0RipNIEE2"}
        });
        // render(<login/>);
    })
})