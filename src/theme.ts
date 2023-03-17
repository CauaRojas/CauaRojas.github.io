class Theme {
    private _theme: 'dark' | 'light';
    constructor() {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            this._theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            this._theme = 'light';
        }
    }
    public set theme(newTheme: 'dark' | 'light') {
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
        this._theme = newTheme;
    }
    public get theme() {
        return this._theme;
    }
}
export const theme = new Theme();
