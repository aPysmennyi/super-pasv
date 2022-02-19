module.exports = {
    require: '@babel/register',
    spec: 'specs/**/auth.specs.js',
    file: 'config/setup.js',
    timeout:15000
}