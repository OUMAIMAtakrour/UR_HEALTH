

import React from 'react';
import { logout } from '../helpers/axios';


const LogoutButton = () => {
    const handleLogout = () => {
        logout(); 
    };
    return (
        <span
            className="flex-1 ms-3 whitespace-nowrap cursor-pointer text-blue-500"
            onClick={handleLogout}
        >
            Log out
        </span>
    );
};

export default LogoutButton;
