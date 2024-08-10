import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/product" activeStyle>Products</NavLink>
                    <NavBtnLink to="/signup" activeStyle>Sign up</NavBtnLink>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/checkout">
                        Checkout
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
