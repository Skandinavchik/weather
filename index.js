import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue } from "./services/storage.service.js";


const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved');
    } catch (error) {
        printError(error.message);
    }
};

const initCli = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        // show help
        printHelp();
    }

    if (args.s) {
        // save city
    }
    
    if (args.t) {
        // save token
        return saveToken(args.t);
    }

    // show weather
};

initCli();