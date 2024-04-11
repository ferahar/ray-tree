import { store } from "./core";
import { CircularSecond } from "./core/example-circular";

const main = () => {
    console.log('main');
    console.log(store.name);
    CircularSecond();
    
}

export {
    main
}