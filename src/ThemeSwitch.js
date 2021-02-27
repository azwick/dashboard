const ThemeSwitch = ({setTheme}) => {

    const handleClick = (mode) => {
        setTheme(mode);
        localStorage.setItem("theme", mode);
    }

    return ( 
        <div className="themeSwitch">
            <span onClick={() => handleClick('light')}>Light</span>
            <div className="toggle"><span className="O"></span></div>
            <span onClick={() => handleClick('dark')}>Dark</span>
        </div>
     );
}

export default ThemeSwitch;