import { Themes, type Theme } from "./Themes";

export class ThemeManager {

    private static get theme(): Theme {
        return localStorage.getItem('theme') as Theme;
    }

    public static refreshColors() {
        const docElem: any = document.documentElement;

        for (let i in Themes[this.theme]) {
            docElem.style.removeProperty(`--${i}`);
            docElem.style.setProperty(`--${i}`, Themes[this.theme][i]);
        }
    }

    public static start() {
        let theme = localStorage.getItem('theme');

        if (!theme) {
           this.switchToTheme('default');
        } else {
            this.switchToTheme(theme as Theme);
        }
    }

    public static switchToTheme(themeName: Theme) {
        localStorage.setItem('theme', themeName);
        this.refreshColors();
    }
}
