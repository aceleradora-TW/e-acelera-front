// logger importante para o desenvolvimento, pois ele irá mostrar no console as mensagens de erro, warning, info, etc.
// doc: https://www.npmjs.com/package/winston

import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info', // nivel de log
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss', // formato da data
        }),
        format.errors({ stack: true }), // mostra o stack de erro
        format.splat(), // permite passar argumentos para o log
        format.json() // formato do log
    ),
    transports: [
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()), // formatação do log
        }),
    ],
});

export default logger;
// exemplo de uso: logger.info('Hello world!');