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
        <div className="navbar">
            <Nav>
                <Bars />

                <NavMenu>
                    <NavBtnLink to="/home">Home</NavBtnLink>
                    <NavBtnLink to="/about" >About</NavBtnLink>
                    <NavBtnLink to="/product" activeStyle>Products</NavBtnLink>
                    <NavBtnLink to="/signup" activeStyle>Sign up</NavBtnLink>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/checkout">
                        Checkout
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    );
};

export default Navbar;
