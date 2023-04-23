import chalk from 'chalk';
import dedent from 'dedent-js';


const printError = (error) => {
    console.log(`${chalk.bgRed(' Error ')} ${error}`);
};

const printSuccess = (msg) => {
    console.log(`${chalk.bgGreen(' Success ')} ${msg}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgBlue(' Help ')}
        Without params - Show weather
        -s [CITY] - Select city
        -t [API_KEY] - Save token
        -h - Help`
    );
};

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgMagenta(' Weather ')} Weather in ${res.name}
        ${icon}  ${res.weather[0].description}
        Temperature: ${Math.round(res.main.temp)} (Feels like ${res.main.feels_like})
        Pressure: ${res.main.pressure} 
        Wind: ${res.wind.speed}`
    );
};

export { printError, printSuccess, printHelp, printWeather };