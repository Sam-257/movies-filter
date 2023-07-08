import logger from 'pino';

// you can use trace, debug, info, warn, error, fatal
const log = logger({
  base: { pid: false },
  transport: {
    target: 'pino-pretty',
    options: {
      colorized: true
    },
    timestamp: () => `, "time": "${new Date().toLocaleString()}"`
  }
});

export default log;