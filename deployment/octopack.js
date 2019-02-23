var octo = require('@octopusdeploy/octopackjs');
var apikey = require('./apikey.json')["Node::OctopackjsKey"];

function pack() {
    octo.pack()
        .append('**')
        .toFile('./dist', function (err, data) {
            octo.push(`./dist/${data.package_name}`, {
                host: 'http://10.0.3.11/',
                apikey: apikey,
                replace: true
            }, function (err, result) {
                if (!err) {
                    console.log('Package Pushed:' + body.Title + ' v' + body.Version + ' (' + fileSizeString(body.PackageSizeBytes) + 'nytes)');
                }
            });
        });
}


