module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-pages/'
    : '/',
    outputDir: 'docs'
}