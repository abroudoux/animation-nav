import React, { ChangeEvent, FC } from "react";
import { Link, useLocation } from "react-router-dom";

import "../style/nav.scss";


type NavLinkProps = {
    path : string;
    title : string;
    isActive ? : boolean;
    handleClick ? : () => void;
};

const NavLinks : FC<NavLinkProps> = ( props ) => {

    const location = useLocation();

    return (

        <li className={`${location.pathname === props.path ? "active" : ""}`} onClick={props.handleClick}>
            <Link to={ props.path }>
                { props.title }
            </Link>
        </li>

    )
};


export default NavLinks;
