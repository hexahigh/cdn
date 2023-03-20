const fs = require('fs')

var AX = {}

AX.copy = function (source, output) {
    //var SBuff = fs.readFileSync(source)
    fs.writeFileSync(output, fs.readFileSync(source), function (err) {
        if (err) throw err
        console.log('Successfully copied file!')
    })
}

AX.move = function (source, destination) {
    fs.rename(source, destination, function (err) {
        if (err) throw err
        console.log('Successfully moved - AKA renamed!')
    })
}