export interface User {
    email: string;
    password: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
    birthDate?: Date;
    gender?: string;
    photoURL?: string;
}