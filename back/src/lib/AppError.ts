type ErrorName =
    | "UnknownError"
    | "UserExistError"
    | "InvalidEmailFormatError"
    | "UserNotFindError"
    | "ArgumentError"
    | "WrongPasswordError";

interface ErrorInfo {
    statusCode: number;
    message: string;
}

const ERROR_MAP: Record<ErrorName, ErrorInfo> = {
    UnknownError: {
        statusCode: 404,
        message: "An unknown error has occurred",
    },
    UserExistError: {
        statusCode: 400,
        message: "User already exists",
    },
    InvalidEmailFormatError: {
        statusCode: 400,
        message: "Invalid email format",
    },
    UserNotFindError: {
        statusCode: 400,
        message: "User can not find",
    },
    ArgumentError: {
        statusCode: 400,
        message: "Wrong argument",
    },
    WrongPasswordError: {
        statusCode: 400,
        message: "Login Failed",
    },
};

class AppError extends Error {
    public readonly statusCode: number;

    constructor(errorName: ErrorName) {
        super(ERROR_MAP[errorName].message);

        this.statusCode = ERROR_MAP[errorName].statusCode;
    }
}

export default AppError;
