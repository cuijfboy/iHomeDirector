var wol = require('wake_on_lan')
var wake = function (mac) {
    wol.wake(mac, function(error) {
        if(error) {
            console.log(error);
        }else{
            console.log("succeed wake up : " + mac);
        }
    })
}
exports.wake = wake;

var SerialPort = require("serialport");
var port = new SerialPort("/dev/tty.usbserial", {
    baudRate: 38400
});

port.on("open", function(error) {
    console.log("serial port open !!!");

    if (error) {
        return console.log("Error !!!");
    }
});

port.on("data", function(data) {
    console.log("data: " + new Buffer(data, 'hex').toString('hex'));
});

var sendRaw = function (data) {
    console.log(data.toString('hex'));
    port.write(data, function(error) {
        if(error) {
            console.log("write fail !!!");
        }
    });
}

var send = function (data) {
    sendRaw(new Buffer(data, "hex"));
}

exports.send = send;
exports.sendRaw = sendRaw;
