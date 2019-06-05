const app = require('./app');

const port = normalizaPort(process.env.PORT || '5000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

module.exports = app.listen(port);