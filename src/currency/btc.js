const https = require('https');

module.exports = {

    balance: function (address) {
        return new Promise((resolve, reject) => {
            https
                .get(`https://blockchain.info/es/q/addressbalance/${address}`, (resp) => {
                    let data = '';
                    resp.on('data', (chunk) => data += chunk);
                    resp.on('end', () => resolve(JSON.parse(data)));
                })
                .on('error', reject);
        });
    }

}