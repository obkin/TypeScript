"use strict";
// Technical
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["SUCCESS"] = "success";
    ResponseStatus["FAILED"] = "failed";
})(ResponseStatus || (ResponseStatus = {}));
function isSuccess(res) {
    if (res.status === ResponseStatus.SUCCESS) {
        return true;
    }
    else {
        return false;
    }
}
function getDatabaseId(response) {
    if (isSuccess(response)) {
        return response.data.databaseId;
    }
    else {
        throw new Error(response.data.errorMessage);
    }
}
