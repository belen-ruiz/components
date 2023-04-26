import styled from "styled-components";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from "react";


export const DarkModeMenu = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
        console.log(`estado DARK MODE: ${darkMode}`)
    }

    return (
        <MenuDarkMode>
            {darkMode ? (
                <div className="lightMode">
                    LightMode
                    <DarkModeIcon />
                </div>
            ) : (
                <div className="darkMode">
                    DarkMode
                    <DarkModeIcon />
                </div>
            )}
            <input type="checkbox" onChange={handleClick} />
        </MenuDarkMode>
    );
};


const MenuDarkMode = styled.div`
    display: flex;
    background-color: #b3b3b3;
`
