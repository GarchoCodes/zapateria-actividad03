import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Detectar preferencia inicial del usuario o sistema
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkMode(prefersDark);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            document.documentElement.classList.toggle("dark", newMode);
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    };

    return (
        <button
            onClick={toggleDarkMode}
            className={`hover:cursor-pointer relative w-16 h-7 top-1 flex items-center rounded-full transition-colors duration-500 
        ${darkMode ? "bg-[oklch(0.4_0.1_262)]" : "bg-[oklch(0.76_0.08_262)]"}`}
        >
            {/* Sol y luna en el fondo */}
            <Sun className="absolute left-2 w-4 h-4 text-gray-300 dark:text-[oklch(0.76_0.08_262)] transition-opacity duration-300" />
            <Moon className="absolute right-2 w-4 h-4 text-[oklch(0.4_0.1_262)] dark:text-gray-300 transition-opacity duration-300" />

            {/* Círculo móvil */}
            <span
                className={`absolute w-5 h-5 dark:bg-[oklch(0.76_0.08_262)] bg-[oklch(0.4_0.1_262)] rounded-full shadow-md transform transition-transform duration-500
          ${darkMode ? "translate-x-10" : "translate-x-1"}`}
            ></span>
        </button>
    );
}
