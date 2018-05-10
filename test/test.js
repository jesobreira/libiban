const iban = require('../')

let ISPB = {
    'Banco BNP Paribas Brasil S.A.': '01522368',
    'Banco Bradesco S.A.': '60746948',
    'Banco Citibank S.A.': '33479023',
    'Banco Caixa Econômica Federal': '00360305',
    'Banco Cooperativo Sicredi S.A.': '01181521',
    'Banco de La Nacion Argentina': '33042151',
    'Banco de La Provincia de Buenos Aires': '44189447',
    'Banco de La Republica Oriental del Uruguay': '51938876',
    'Banco de Tokyo-Mitsubishi UFJ Brasil S.A.': '60498557',
    'Banco do Brasil S.A.': '00000000',
    'Banco do Estado do Rio Grande do Sul S.A.': '92702067',
    'Banco Intercap S.A.': '58497702',
    'Banco Itaú BBA S.A.': '17298092',
    'Banco Mercantil do Brasil S.A.': '17184037',
    'Banco Modal S.A.': '30723886',
    'Banco Rural S.A.': '33124959',
    'Banco Santander S.A.': '90400888',
    'Banco Société Générale Brasil S.A.': '61533584',
    'BRB - Banco de Brasí­lia S.A.': '00000208',
    'Deutsche Bank S.A. Banco Alemão': '62331228',
    'HSBC Bank Brasil S.A. Banco Múltiplo': '01701201',
    'Itaú Unibanco S.A.': '60701190',
    'Natixis Brasil S.A. Banco Múltiplo': '09274232',
    'Unibanco - União de Bancos Brasileiros S.A.': '33700394'
}

var generated_code = iban.gen({
    ispb: '60746948',
    agency: '1234',
    account: '567890',
    account_type: 'C',
    account_owner: 1
})

var check_test = iban.check( generated_code )

var assert = require('assert');

describe('iban', function() {
    describe('.gen()', function() {
        it('should return BR2860746948012340000567890C1', function() {
            assert.equal(generated_code, 'BR2860746948012340000567890C1');
        })
    })
    describe('.check()', function() {
        it('should return true', function() {
            assert.ok(check_test)
        })
    })
})