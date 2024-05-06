const UNAUTHENTICATED = {
    "error": {
        "code" : "UNAUTHENTICATED",
        "message": "Authentication failed."
    }
};

const UNAUTHORIZED = {
    "error": {
        "code" : "UNAUTHORIZED",
        "message": "You are not authorized for this request."
    }
};

const NOT_FOUND = {
    "error": {
        "code" : "NOT_FOUND",
        "message": "The data you are looking for is not found."
    }
};


module.exports = {
    UNAUTHENTICATED,
    UNAUTHORIZED,
    NOT_FOUND
}




