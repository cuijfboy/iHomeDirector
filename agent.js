var SerialPort = require("serialport");
var port = new SerialPort.SerialPort("/dev/tty.usbserial", {
    bandrate: 38400
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
