const https = require('https');

module.exports = {

    balance: function (address) {
        return new Promise((resolve, reject) => {
            https
                .get(`https://chain.so/api/v2/get_address_balance/BTC/${address}`, (resp) => {
                    let data = '';
                    resp.on('data', (chunk) => data += chunk);
                    resp.on('end', () => resolve(parseFloat(JSON.parse(data).data.confirmed_balance)));
                })
                .on('error', reject);
        });
    }

}