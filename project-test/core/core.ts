import { Store } from "./store";
import { compareFile, cloneObject } from "./utils";

const store = new Store(compareFile);

cloneObject({});

export {
    store
}
