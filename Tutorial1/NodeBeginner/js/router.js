/**
 * Created by JetBrains WebStorm.
 * User: mdljohnston
 * Date: 4/4/12
 * Time: 10:00 PM
 * To change this template use File | Settings | File Templates.
 */

function route(handle, pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    }else {
        console.log("No request handler found for "+pathname);
        return "404 Not Found";
    }
}

exports.route = route;

