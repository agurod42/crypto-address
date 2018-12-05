const cryptoaddress = require('./cryptoaddress');
const express = require('express');

const app = express();

app.get('/:address', (req, res) => {
    if (!req.params.address) return;
    var currency = cryptoaddress.detect(req.params.address);
    cryptoaddress
        .balance(req.params.address, currency)
        .then(balance => {
            var o = {
                address: req.params.address,
                currency: currency,
                balance: balance,
            };
            res.json(req.query.field ? o[req.query.field] : o);
        });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('cryptoaddress is up and running');
});