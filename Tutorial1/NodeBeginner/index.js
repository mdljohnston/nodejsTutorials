/**
 * Created by JetBrains WebStorm.
 * User: mdljohnston
 * Date: 4/4/12
 * Time: 9:48 PM
 * To change this template use File | Settings | File Templates.
 */

var server = require ("./js/server");
var router = require ("./js/router");
var requestHandlers = require ("./js/requestHandlers");

var handle = {}
    handle["/"] = requestHandlers.start;
    handle["/start"] = requestHandlers.start;
    handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
