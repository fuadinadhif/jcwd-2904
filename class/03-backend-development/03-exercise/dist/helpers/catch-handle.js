"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchHandle = catchHandle;
function catchHandle(error, res) {
    let statusCode;
    let message;
    if (error instanceof Error) {
        statusCode = error.statusCode || 500;
        message =
            `Encountered error because: ${error.message}` ||
                "Unknown error happened. Good luck!";
    }
    res.status(statusCode).json({ message });
}
