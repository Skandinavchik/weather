


const getArgs = (args) => {
    const result = {};
    const [executer, file, ...rest] = args;

    rest.forEach((item, index, array) => {
        if (item.startsWith('-')) {
            if (index === array.length - 1) {
                result[item.slice(1)] = true;
            } else if (!array[index + 1].startsWith('-')) {
                result[item.slice(1)] = array[index + 1];
            } else {
                result[item.slice(1)] = true;
            }
        }
    });

    return result;
};

export { getArgs };