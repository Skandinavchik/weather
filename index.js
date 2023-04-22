import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from './services/log.service.js';


const initCli = () => {
    const args = getArgs(process.argv);

    console.log(args);
    if (args.h) {
        // show help
        printHelp();
    }

    if (args.s) {
        // save city
        printSuccess();
    }

    if (args.t) {
        // save token
    }

    // show weather
};

initCli();