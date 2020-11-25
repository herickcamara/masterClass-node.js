const log= require('./logge');
const os = require('os');

setInterval(()=>{
    const {freemem, totalmem} = os;

    const mem = parseInt(freemem() / 1024 /1024)
    const total = parseInt(totalmem()/ 1024/ 1024)
    const percent = parseInt((mem / total)*100) 
   
    const stats = {
        free:`${mem} MB`,
        total:`${total} MB`,
        percent:`${percent}%`
    }
  
    console.clear()
    console.log(' ========RODANO=======')
    console.table(stats)
    log(`${JSON.stringify(stats)}\n`)

},1000)

