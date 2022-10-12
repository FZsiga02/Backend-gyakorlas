"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('signup')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let username = document.getElementById('username');
        if (username.value.length >= 30 || username.value.length <= 6) {
            alert("A felhasználónév nem megfelelő");
        }
    });
});
