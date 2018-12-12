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
                currency: currency.toUpperCase(),
                balance: balance,
            };

            if (req.query.field) {
                var v = req.query.field.split(' ').map(f => o[f]).join(' ');
                res.json(v);
            }
            else {
                res.json(o);
            }
        });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('cryptoaddress is up and running');
});