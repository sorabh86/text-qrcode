// index.js -> bundle.js
var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')
var sosText = document.getElementById('sos-text')
var btnGenerate = document.getElementById('btn-generate')

console.log('application started');

btnGenerate.addEventListener('click', function(){
    QRCode.toCanvas(canvas, sosText.value, function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
    console.log('clicked on button');
})