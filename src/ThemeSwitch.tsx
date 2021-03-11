export default function ThemeSwitch({ setTheme }: { setTheme: any }) : React.ReactElement {

    const handleClick = (mode: string) => {
        setTheme(mode);
        localStorage.setItem("theme", mode);
    };

    return (
        <div className="themeSwitch">
            <span onClick={() => handleClick('light')}>Light</span>
            <div className="toggle"><span className="O"></span></div>
            <span onClick={() => handleClick('dark')}>Dark</span>
        </div>
    );
}