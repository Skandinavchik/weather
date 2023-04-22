import { getArgs } from "./helpers/args.js";


const initCli = () => {
    const args = getArgs(process.argv);

    console.log(args);
    if (args.h) {
        // show help
    }

    if (args.s) {
        // save city
    }

    if (args.t) {
        // save token
    }

    // show weather
};

initCli();