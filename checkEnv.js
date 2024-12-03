const logger = require('./utils/logger').default;

const envs = [
    'GIT_ID',
    'GIT_SECRET',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'FACEBOOK_CLIENT_ID',
    'FACEBOOK_CLIENT_SECRET',
    'LINKEDIN_CLIENT_ID',
    'LINKEDIN_CLIENT_SECRET',
    'NEXTAUTH_URL',
    'NEXTAUTH_SECRET',
];

let isMissing = false;

envs.forEach((env) => {
    if (!process.env[env]) {
        logger.error(`${env} não está definido.`);
        isMissing = true;
    } else {
        logger.info(`${env} está definido: ${process.env[env] ? 'Sim' : 'Não'}`);
    }
});

if (isMissing) {
    console.error("Algumas variáveis de ambiente estão faltando.");
    process.exit(1);
} else {
    console.log("Todas as variáveis de ambiente estão definidas.");
}
