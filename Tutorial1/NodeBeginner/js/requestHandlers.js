/**
 * Created by JetBrains WebStorm.
 * User: mdljohnston
 * Date: 4/4/12
 * Time: 10:14 PM
 * To change this template use File | Settings | File Templates.
 */

function start () {

    console.log("request handler 'start' was called.");
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
