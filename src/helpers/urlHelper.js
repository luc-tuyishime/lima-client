require('dotenv').config();

const { location } = window;
const protocol = location.protocol && location.protocol;
const hostname = location.hostname && location.hostname;
const port = (location.port && `:${location.port}`) || '';

const { REACT_APP_LIMA_URL_BACKEND } = process.env;
console.log(REACT_APP_LIMA_URL_BACKEND);

const frontend = {
   reactUrl: REACT_APP_LIMA_URL_BACKEND,
   herokuUrl: '',
   defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`,
};

const backend = {
   reactUrl: REACT_APP_LIMA_URL_BACKEND,
   defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`,
};

export { frontend, backend };
