import { SHA256 } from "crypto-js";
import axios from "axios";

export function hashPassword(password: string) {
    return SHA256(password).toString();
}
export function changePassword(mail: string) {
    //source : https://openjavascript.info/2022/03/14/random-password-generator-using-javascript/
    const length = 12;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
        password += chars[array[i] % chars.length];
    }
    //mailTo:(mail,password);
    axios.put(`http://localhost:3001/utilisateurs?mail=${mail}`, password);
}