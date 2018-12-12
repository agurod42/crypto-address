const BigNumber = require('bignumber.js');
const https = require('https');

module.exports = {

    balance: function (address) {
        return new Promise((resolve, reject) => {
            https
                .get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}`, (resp) => {
                    let data = '';
                    resp.on('data', (chunk) => data += chunk);
                    resp.on('end', () => resolve(new BigNumber(JSON.parse(data).result).div('1e18').toNumber()));
                })
                .on('error', reject);
        });
    }

}