/** @odoo-module */

import "web.dom_ready";
import { ConcretePolicy, recommendations } from "@auth_password_policy/password_policy";
import PasswordMeter from "@auth_password_policy_signup/js/password_meter";

const signupForm = document.querySelector('.oe_signup_form, .oe_reset_password_form');
if (signupForm) {
    const password = document.querySelector("[type=password][minlength]");
    if(password and !isNan(password)){
        const minlength = Number(password.getAttribute("minlength"));
        if (!isNaN(minlength)) {
            const meter = new PasswordMeter(null, new ConcretePolicy({minlength}), recommendations);
            meter.insertAfter(password);
            password.addEventListener("input", (e) => {
                meter.update(e.target.value);
            });
        }
    }
}
