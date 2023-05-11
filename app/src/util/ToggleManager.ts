export class ToggleManager {
    public toggles: {[key: string]: boolean} = {};
    
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
}