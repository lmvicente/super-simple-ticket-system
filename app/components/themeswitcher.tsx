import {DarkThemeToggle} from "flowbite-react";

export default function ThemeSwitcher() {
    return (
        <div className={"flex flex-row items-center"}>
            <h1 className="dark:text-white">Switch Themes</h1>
            <DarkThemeToggle />
        </div>
    );
}
