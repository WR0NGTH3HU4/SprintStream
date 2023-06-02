export class ToggleManager {

    private toggles: { [key: string]: boolean } = {};


    constructor(keys: string[]) {
        for (let key of keys) {
            this.toggles[key] = false;
        }
    }

    public toggle(toggleable: string) {
        for (let key in this.toggles) {
            if (key != toggleable) {
                this.toggles[key] = false;
            }
        }

        this.toggles[toggleable] = !this.toggles[toggleable];
    }

    public get(key: string) {
        return this.toggles[key];
    }

    public getToggled(): string | null {
        for (let key in this.toggles) {
            if (this.toggles[key] == true) return key;
        }

        return null;
    }

    public isToggled(key: string): boolean {
        return this.toggles[key];
    }
}

