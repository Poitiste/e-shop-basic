import React, { FunctionComponent, useContext, useState } from "react";
import { Field } from "../const/types"
import { validatorMail, validatorPasword } from "./validator";
import { useNavigate } from "react-router-dom";
import { login } from "../dbFunctions/AuthService";
import toast from "react-hot-toast";
import UserContext from "../_components/UserContext";
//import UserContext from "../_components/UserContext";

type Form = { mail: Field, password: Field };

const LoginForm: FunctionComponent = () => {
    const [form, setForm] = useState<Form>({
        mail: { value: '' },
        password: { value: '' }
    });
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });
    }

    const valideForm = () => {
        let newForm: Form = form;

        //validator mail
        let inputMail = validatorMail(form.mail.value);
        newForm = { ...newForm, ...{ mail: inputMail } };

        //validator passwordS
        let inputPassword = validatorPasword(form.password.value);
        newForm = { ...newForm, ...{ password: inputPassword } };


        setForm(newForm);
        return newForm.mail.isValid &&
            newForm.password.isValid;
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valideForm()) {
            try {
                await login(form.mail.value,form.password.value);
                setCurrentUser(localStorage.getItem("user"));
                navigate("/");
            } catch (error) {
                console.error(error);
                toast.error("Une erreur est survenue lors de la connexion")
            }
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <h1 className="center">Connexion</h1>
                    <div className="card hoverable">
                        <div className="card-stacked">
                            <div className="card-content">

                                <div className="form-group">
                                    <i className="material-icons left">person</i>
                                    <label htmlFor="mail">Identification</label>
                                    <input type="text"
                                        id="mail"
                                        name="mail"
                                        className="form-control"
                                        value={form.mail.value}
                                        placeholder="exemple@mail.com"
                                        onChange={e => handleChange(e)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <i className="material-icons left">lock</i>
                                    <label htmlFor="password">Mot de passe</label>
                                    <input type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        value={form.password.value}
                                        placeholder="*************"
                                        onChange={e => handleChange(e)}
                                        required
                                    />
                                </div>

                                {
                                    form.password.error &&
                                    <div className="card-panel red accent-1">
                                        {form.password.error}
                                    </div>
                                }
                            </div>
                            <div className="card-action center">
                                <button type="submit" className="btn">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;