import chalk from 'chalk';
import dedent from 'dedent-js';


const printError = (error) => {
    console.log(chalk.bgRed(' Error ')` ${error}`);
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

export { printError, printSuccess, printHelp };