"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('signup')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let username = document.getElementById('username');
        if (username.value.length >= 30 || username.value.length <= 6) {
            alert("A felhasználónév nem megfelelő");
        }
        let email = document.getElementById('email');
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        };
        validateEmail(email.value);
        let remail = document.getElementById('re-email');
        if (remail.value != email.value) {
            alert("A két email nem egyezik");
        }
    });
});
