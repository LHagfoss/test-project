import React, { useState, useEffect } from "react";

export default function ChangeTheme() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button 
            type="button"
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md bg-[--accent] text-[#fbfbfe]"
        >
            {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};