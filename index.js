import { getArgs } from "./helpers/args.js";
import { getWeather, getIcon } from "./services/api.service.js";
import { printError, printSuccess, printHelp, printWeather } from './services/log.service.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";


const saveToken = async (token) => {
    if (!token.length) {
        printError('Provide a token');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token saved');
    } catch (error) {
        printError(error.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('Provide a City');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City saved');
    } catch (error) {
        printError(error.message);
    }
};

const getForcast = async () => {
    try {
        const city = await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (error) {
        switch (error?.response?.status) {
            case 404:
                printError('Wrong City name');
                break;
            case 401:
                printError('Wrong TOKEN');
                break;
            default:
                printError(error.message);
        };
    };
};

const initCli = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        // show help
        return printHelp();
    }

    if (args.s) {
        // save city
        return saveCity(args.s)
    }

    if (args.t) {
        // save token
        return saveToken(args.t);
    }

    // show weather
    return getForcast();
};

initCli();