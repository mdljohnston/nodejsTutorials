/**
 * Created by JetBrains WebStorm.
 * User: mdljohnston
 * Date: 4/4/12
 * Time: 10:14 PM
 * To change this template use File | Settings | File Templates.
 */

function start () {

    console.log("request handler 'start' was called.");

    function sleep(miliSeconds){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + miliSeconds);
    }
    sleep(10000);
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
