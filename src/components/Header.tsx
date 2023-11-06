import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
// import { useLocation } from "react-router-dom";


import NavLinks from "./NavLinks";

import "../style/nav.scss"


export default function Header() {

    const location = useLocation();

    const [activeTab, setActiveTab] = useState(0);
    const indicatorRef = useRef<HTMLUListElement>(null);

    const handleTabClick = (index: number) => {
        if (indicatorRef.current) {
            const navItem = indicatorRef.current.children[index] as HTMLElement;
            if (navItem) {
                const { offsetLeft, offsetWidth } = navItem;
                if (indicatorRef.current) {
                    indicatorRef.current.style.width = `${offsetWidth}px`;
                    indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
                }
            }
        }
        setActiveTab(index);
    };

    useEffect(() => {
        handleTabClick(activeTab);
    }, []);

    return (

        <header>
            <nav>
                <ul ref={indicatorRef} className="indicator">
					<NavLinks path="/" title="Lien 1" handleClick={() => handleTabClick(0)} isActive={location.pathname === props.path} />
					<NavLinks path="/2" title="Lien 2" handleClick={() => handleTabClick(0)} isActive={location.pathname === props.path} />
					<NavLinks path="/3" title="Lien 3" handleClick={() => handleTabClick(0)} isActive={location.pathname === props.path} />
					<NavLinks path="/4" title="Lien 4" handleClick={() => handleTabClick(0)} isActive={location.pathname === props.path} />
					<NavLinks path="/5" title="Lien 5" handleClick={() => handleTabClick(0)} isActive={location.pathname === props.path} />
                </ul>
            </nav>
        </header>

    )
}