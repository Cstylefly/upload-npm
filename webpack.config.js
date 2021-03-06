const path = require("path/posix")
const TerserPlugin = require("terser-webpack-plugin")
module.exports = {
    entry:{
        "cstyle":'./src/index.js',
        "cstyle.min":'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'lib'),
        filename:"[name].js",
        library:"cstyle",
        libraryExport:"default",
        libraryTarget:"umd"
    },
    mode:'none',
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                include:/\.min\.js$/
            })
        ]
    }
}