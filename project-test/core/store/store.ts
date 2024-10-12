class Store {
    name: string = 'Store';
    private event: () => void;
    constructor(cd: () => void) {

    }

    setName = (name: string) => {
        this.event();
        this.name = name;
    }
}

export {
    Store
}