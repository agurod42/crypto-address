const wav = require('wallet-address-validator');

const symbols = {
    btc:  'btc',
    bcn:  'bch',
    ltc:  'ltc',
    ppc:  'ppc',
    doge: 'doge',
    bvc:  'bvc',
    frc:  'frc',
    pts:  'pts',
    mec:  'mec',
    xpm:  'xpm',
    aur:  'aur',
    nmc:  'nmc',
    bio:  'bio',
    grlc: 'grlc',
    vtc:  'vtc',
    btg:  'btg',
    kmd:  'kmd',
    btcz: 'btcz',
    btcp: 'btcp',
    hush: 'hush',
    sng:  'sng',
    zec:  'zec',
    zcl:  'zcl',
    zen:  'zen',
    vot:  'vot',
    dcr:  'dcr',
    dgb:  'dgb',
    eth:  'eth',
    etz:  'etz',
    etc:  'etc',
    clo:  'clo',
    xrp:  'xrp',
    dash: 'dash',
    neo:  'neo',
    gas:  'gas',
    qtum: 'qtum',
    bkx:  'bkx',
    xmr:  'xmr',
    nano: 'nano',
    xrb:  'xrb'
};

module.exports = {

    symbols: symbols,

    balance: function (address, currency) {
        if (!currency) {
            currency = this.detect(address);
        }
        
        const lib = require('./currency/'+currency);
        return lib.balance(address);
    },

    detect: function (address) {
        for (var i in symbols) {
            if (wav.validate(address, symbols[i])) {
                return symbols[i];
            }
        }

        return false;
    }

}