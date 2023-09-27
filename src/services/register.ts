import { FormUser } from "../_commons/types";
import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import { hashPassword } from "./password";

export function register(formUser: FormUser) {
    if (formUser.password.value === formUser.confirmPassword.value) {
        const formUserCopy = { ...formUser };
        Reflect.deleteProperty(formUserCopy, 'confirmPassword');
        formUserCopy.password.value = hashPassword(formUserCopy.password.value);

        axios.get(`http://localhost:3001/users?mail=${formUserCopy.mail.value}`)
            .then(res => {
                if (res.data.length > 0) {
                    toast.error("Un compte est déjà enregistré avec cet email");
                }
                else {
                    let userToRegister = [["typeAccount", "Customer"]];
                    for (const [key, value] of Object.entries(formUserCopy)) {
                        // eslint-disable-next-line
                        for (const [subKey, realValue] of Object.entries(value)) {
                            if (subKey === 'value') { userToRegister.push([key, realValue]); }
                        }
                    }
                    axios.post(`http://localhost:3001/users`, Object.fromEntries(userToRegister))
                        .then(_ => {
                            toast.success("Inscription réussie");
                            redirect("/login")
                        })
                        .catch(error => console.error(error))
                }
            })
            .catch(error => console.error(error))
    }
    else {
        toast.error("Les mots de passe doivent être identiques.");
    }
}

