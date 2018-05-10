"use strict"

const leftPad = require('left-pad')
const bigInt = require('big-integer')

const ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      ALPHA = {}

for(let c of ascii_uppercase)
    ALPHA[c] = String(c.charCodeAt(0) % 55)

const IBAN = {
    "gen": function(data) {
        let iban,checkA,check,char

        if (!data.ispb || !data.agency || !data.account)
            throw new Error('Missing needed data for generating IBAN. Make sure you have included: ispb agency account country')


        data.country = (typeof data.country !== 'undefined') ? data.country : 'BR'
        data.account_type = (typeof data.account_type !== 'undefined' ? data.account_type : 'C')
        data.account_owner = String(data.account_owner) | '1'

        if (data.ispb.length != 8)
            throw new Error('Invalid ISPB code', data.ispb)

        if (data.agency.length > 5)
            throw new Error('Invalid agency', data.agency)

        if (data.account.length > 10)
            throw new Error('Invalid account number', data.account)

        data.agency = leftPad(data.agency, 5, '0')
        data.account = leftPad(data.account, 10, '0')

        iban = String(data.ispb) + String(data.agency) + String(data.account) + String(data.account_type) + String(data.account_owner)

        // checksum
        checkA = String(iban) + String(data.country) + "00"
        check = ''

        for (let c of checkA) {
            char = ALPHA[c]
            if (!char) char = c
            check += String(char)
        }
        
        check = bigInt(98).minus(bigInt(check).mod(97))

        check = leftPad(String(check), 2, '0')

        return data.country + check + iban
    },
    "check": function(iban) {
        let checkA,check,char

        if (iban.length != 29)
            return false

        checkA = String(iban.substr(4)) + String(iban.substr(0, 4))

        check = ''

        for (let c of checkA) {
            char = ALPHA[c]
            if (!char) char = c
            check += String(char)
        }
        
        return bigInt(check).mod(97).compare(1) === 0
    }
}

if (typeof window !== 'undefined') {
    window.iban = IBAN
} else {
    module.exports = IBAN
}