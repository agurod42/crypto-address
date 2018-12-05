const chai = require('chai');
const cryptoaddress = require('../src/cryptoaddress');

describe('detect', function () {

  describe('btc', function () {

    it('P2PKH address', function () {
      chai.expect(cryptoaddress.detect('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2')).to.be.equals(cryptoaddress.symbols.btc);
    });

    it('P2SH address', function () {
      chai.expect(cryptoaddress.detect('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy')).to.be.equals(cryptoaddress.symbols.btc);
    });

    it('Bech32 address', function () {
      chai.expect(cryptoaddress.detect('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq')).to.be.equals(cryptoaddress.symbols.btc);
    });

    it('Invalid address', function () {
      chai.expect(cryptoaddress.detect('ThisIsAnInvalidAddress')).to.be.false;
    });

  });

})

describe('balance', function () {

  describe('btc', function () {

    it('P2PKH address (1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2)', async function () {
      let balance = await cryptoaddress.balance('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

    it('P2SH address (3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy)', async function () {
      let balance = await cryptoaddress.balance('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

    it('Bech32 address (bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq)', async function () {
      let balance = await cryptoaddress.balance('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

    it('BTC address with currency autodetection', async function () {
      let balance = await cryptoaddress.balance('1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2', cryptoaddress.symbols.btc);
      chai.expect(balance).to.be.greaterThan(0);
    });

  });

});