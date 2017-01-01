export interface User {
    username?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;

    // var x = new Date(JSON.parse(JSON.stringify(new Date())));
    // http://stackoverflow.com/questions/11491938/issues-with-date-when-using-json-stringify-and-json-parse
    birthDate?: string;

    gender?: string;
    photoURL?: string;
}