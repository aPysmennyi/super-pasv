module.exports = {
    require: '@babel/register',
    spec: 'specs/**/*.specs.js',
    ignore: 'specs/example.specs.js',
    file: 'config/setup.js',
    timeout: 15000
}