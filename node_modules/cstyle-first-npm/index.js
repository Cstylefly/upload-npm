if(process.env.NODE_ENV == 'production'){
    module.exports = require('./dist/cstyle.min.js')
}else if(process.env.NODE_ENV == 'development'){
    module.exports = require('./dist/cstyle.js')
}   