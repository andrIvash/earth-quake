/**
 * Created by igornepipenko on 12/19/16.
 */
module.exports = {
    entry: './main',
    output:{
        filename: './bundle.js'
    },
    module:{
        loader: [
            {test:/\.ts?$/,loader:'ts-loader'}
        ]
    }
}