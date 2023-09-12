import { React } from 'react';
import Header from "../header";
import { Outlet } from "react-router-dom";
import Footer from '../footer';

export function Layout() {

    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;