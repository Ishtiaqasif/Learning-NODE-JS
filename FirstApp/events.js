const Logger = require('./logger');
const logger  = new Logger();

logger.on('messageLogged', (arg) => {
    console.log(arg);
});

logger.log('message');

