const cryptoaddress = require('./cryptoaddress');
const express = require('express');

const app = express();

app.get('/:address', (req, res) => {
    var currency = cryptoaddress.detect(req.params.address);
    var balance = cryptoaddress[currency].balance(req.params.address);
    res.send({
        address: req.params.address,
        currency: currency,
        balance: balance,
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('cryptoaddress is up and running');
});