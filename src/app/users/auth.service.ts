export class AuthService {
    loggedin = false;

    isAuthenticated() {
        const promise = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedin);
            }, 1000);
        });
        return promise;
    }

    login() {
        this.loggedin = true;
    }

    logout() {
        this.loggedin = false;
    }
}
