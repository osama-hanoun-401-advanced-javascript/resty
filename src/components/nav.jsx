import { NavLink } from 'react-router-dom';
import React from 'react';

const nav = () => {
    return (
        <>
            <ul>
                <li >
                    <NavLink to="/"> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/history"> History</NavLink>
                </li>
                <li>
                    <NavLink to="/help"> Help</NavLink>
                </li>
            </ul>

        </>
    )
};

export default nav;