import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFire, AuthMethods, AuthProviders } from "angularfire2/index";

import { User } from "../models/user.interface";

@Injectable()
export class AuthService {
    authenticatedUser = { email: null };

    constructor(private _af: AngularFire, private _router: Router) {
        this._af.auth.subscribe(auth => {
            if (auth != null) {
                this.authenticatedUser.email = auth.auth.email.toString();
                console.log(this.authenticatedUser.email + ' signed-in')
            } else {
                console.log(this.authenticatedUser.email + ' signed-out')
            }
        })
    }

    getUser() {
        return this._af.auth
    }

    signUp(user: User): PromiseLike<boolean> {
        return this._af.auth
            .createUser({
                email: user.email,
                password: user.password,
            })
            .then((createdUser) => {
                return this._af.database
                    .object('/profiles/' + createdUser.auth.uid)
                    .set({                                        // adding user to firebase
                        username: user.username != null ? user.username : '',
                        email: createdUser.auth.email,
                        displayName: user.firstName + ' ' + user.lastName,                        
                        birth: user.birthDate != null ? user.birthDate : '',
                        gender: user.gender != null ? user.gender : '',
                        photoURL: user.photoURL!= null ? user.photoURL : ''
                    })
            }, (error) => {
                console.trace(error);
                return Promise.reject(error)
            })
            .then(() => {
                this._router.navigate(['/profile']);
                return Promise.resolve(true)
            }, (error) => {
                this._router.navigate(['/signup']);
                return Promise.resolve(false)
            })
    }

    login(user: User): PromiseLike<boolean> {
        return this._af.auth
            .login({
                email: user.email,
                password: user.password
            }, {
                provider: AuthProviders.Password, // this.providerSet(source),
                method: AuthMethods.Password
            })
            .then(() => {
                this._router.navigate(['/exchange']);
                return Promise.resolve(true)
            }, error => {
                console.log(error.message);
                this._router.navigate(['/login']);
                return Promise.resolve(false)
            });
    }

    logout(): void {
        this._af.auth.logout();
        this.authenticatedUser.email = null;
        this._router.navigate(['/exchange']);
    }

    providerSet(source) {
        switch (source) {
            case 'Google':
                return AuthProviders.Google;
            case 'Facebook':
                return AuthProviders.Facebook;
        }
    }
}
