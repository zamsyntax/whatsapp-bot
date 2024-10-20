const qrcode = require('qrcode');

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.toFile('qrcode.png', qr, { errorCorrectionLevel: 'H' }, (err) => {
        if (err) console.error(err);
        console.log('QR code saved as qrcode.png');
    });
});
