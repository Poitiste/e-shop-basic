import { useState } from "react";
import { Field } from "./types";
import { validatorMail } from "./validator";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/password";


type Form = { mail: Field }

export default function ForgotPassword() {
    const [form, setForm] = useState<Form>({ mail: { value: '' } });
    const [message, setMessage] = useState<String>('');
    const navigate = useNavigate();

    const valideForm = () => {
        let newForm: Form = form;

        //validator mail
        let inputMail = validatorMail(form.mail.value);
        newForm = { ...newForm, ...{ mail: inputMail } };

        return newForm.mail.isValid;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormValid = valideForm();
        if (isFormValid) {
            setMessage('Vous allez recevoir un mail pour modifier votre mot de passe');
            changePassword(form.mail.value);
            navigate("/");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1 className="center">Mot de passe oublié</h1>
                {message &&
                    <div className="form-group">
                        <div className="card-panel grey lighten-5">
                            {message}
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <div className="card hoverable">
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <div className="form-group">
                                            <i className="material-icons left">mail</i>
                                            <label htmlFor="userMail">Mail</label>
                                            <input
                                                type="email"
                                                name="userMail"
                                                id="userMail"
                                                placeholder="exemple@mail.com"
                                                className="form-control"
                                                onChange={e => handleChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-action center">
                                        <button type="submit" className="btn">Valider</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <p className="center">Ou contactez-nous au : 09XXXXXXXX</p>
        </div>
    );
}