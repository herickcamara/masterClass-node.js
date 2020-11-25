const EventEmitter= require('events');
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter();

emitter.on('log', (messagem)=>{
    fs.appendFile(path.join(__dirname, 'logge.txt'), messagem, err => {
        if(err) throw err
    })
})
function log(messagem){
    emitter.emit('log', messagem)
}

module.exports = log