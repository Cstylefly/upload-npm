if(process.env.NODE_ENV == 'production'){
    module.exports = require('./lib/cstyle.min.js')
}else if(process.env.NODE_ENV == 'development'){
    module.exports = require('./lib/cstyle.js')
}   