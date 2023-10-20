import React, { FunctionComponent, useState } from "react";
import { Field } from "../const/types"
import { validatorMail, validatorPasword, validatorPhoneNumber, validatorPostal, validatorSIRET, validatorString } from "./validator";
import { useNavigate } from "react-router-dom";
import { register } from "../dbFunctions/register";

type Form = {
    firstName: Field,
    lastName: Field,
    phoneNumber: Field,
    mail: Field,
    siret: Field,
    address: Field,
    postal: Field,
    city: Field,
    password: Field,
    confirmPassword: Field
};


const RegisterForm: FunctionComponent = () => {
    const [form, setForm] = useState<Form>({
        firstName: { value: '' },
        lastName: { value: '' },
        phoneNumber: { value: '' },
        mail: { value: '' },
        siret: { value: '' },
        address: { value: '' },
        postal: { value: '' },
        city: { value: '' },
        password: { value: '' },
        confirmPassword: { value: '' }
    });

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });
    }

    const valideForm = () => {
        let newForm: Form = form;

        //validator firstName & lastName
        let inputFirstName = validatorString(form.firstName.value);
        let inputLastName = validatorString(form.lastName.value);
        newForm = { ...newForm, ...{ firstName: inputFirstName } };
        newForm = { ...newForm, ...{ lastName: inputLastName } };

        //validator phoneNumber
        let inputPhoneNumber = validatorPhoneNumber(form.phoneNumber.value);
        newForm = { ...newForm, ...{ phoneNumber: inputPhoneNumber } };

        //validator siret
        let inputSIRET = validatorSIRET(form.siret.value);
        newForm = { ...newForm, ...{ siret: inputSIRET } };

        //validator mail
        let inputMail = validatorMail(form.mail.value);
        newForm = { ...newForm, ...{ mail: inputMail } };

        //validator address & city
        let inputAddress = validatorString(form.address.value);
        let inputCity = validatorString(form.city.value);
        newForm = { ...newForm, ...{ address: inputAddress } };
        newForm = { ...newForm, ...{ city: inputCity } };

        //validator postal
        let inputPostal = validatorPostal(form.postal.value);
        newForm = { ...newForm, ...{ postal: inputPostal } };

        //validator passwordS
        let inputPassword = validatorPasword(form.password.value);
        let inputConfirmPassword = validatorPasword(form.confirmPassword.value);
        newForm = { ...newForm, ...{ password: inputPassword } };
        newForm = { ...newForm, ...{ confirmPassword: inputConfirmPassword } };


        setForm(newForm);
        return newForm.firstName.isValid &&
            newForm.lastName.isValid &&
            newForm.phoneNumber.isValid &&
            newForm.mail.isValid &&
            newForm.address.isValid &&
            newForm.postal.isValid &&
            newForm.city.isValid &&
            newForm.password.isValid &&
            newForm.confirmPassword.isValid;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valideForm()) {
            try {
                register(form);
                navigate("/");
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1 className="center">Création de compte</h1>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable">
                        <div className="card-stacked">
                            <div className="card-content">

                                <div className="form-group">
                                    <i className="material-icons left">person</i>
                                    <label htmlFor="firstName">Prénom</label>
                                    <input type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control"
                                        value={form.firstName.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">person</i>
                                    <label htmlFor="lastName">Nom</label>
                                    <input type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-control"
                                        value={form.lastName.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">phone</i>
                                    <label htmlFor="phoneNumber">Numéro de téléphone</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        className="form-control"
                                        minLength={10}
                                        maxLength={10}
                                        value={form.phoneNumber.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">work</i>
                                    <label htmlFor="siret">SIRET</label>
                                    <input
                                        type="tel"
                                        name="siret"
                                        id="siret"
                                        className="form-control"
                                        minLength={14}
                                        maxLength={14}
                                        value={form.siret.value}
                                        onChange={e => handleChange(e)}
                                        placeholder="élément obligatoire pour les entreprises"
                                    />

                                    <i className="material-icons left">email</i>
                                    <label htmlFor="mail">Mail</label>
                                    <input type="email"
                                        id="mail"
                                        name="mail"
                                        className="form-control"
                                        value={form.mail.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">home</i>
                                    <label htmlFor="address">Adresse</label>
                                    <input type="text"
                                        name="address"
                                        id="address"
                                        className="form-control"
                                        value={form.address.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">location_on</i>
                                    <label htmlFor="postal">Code postal</label>
                                    <input type="text"
                                        name="postal"
                                        id="postal"
                                        minLength={5}
                                        maxLength={5}
                                        className="form-control"
                                        value={form.postal.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">location_city</i>
                                    <label htmlFor="city">Commune</label>
                                    <input type="text"
                                        name="city"
                                        id="city"
                                        className="form-control"
                                        value={form.city.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">lock</i>
                                    <label htmlFor="password">Mot de passe</label>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        value={form.password.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    <i className="material-icons left">lock</i>
                                    <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                                    <input type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        className="form-control"
                                        value={form.confirmPassword.value}
                                        required
                                        onChange={e => handleChange(e)}
                                    />

                                    {
                                        (
                                            form.firstName.error ||
                                            form.lastName.error ||
                                            form.phoneNumber.error ||
                                            form.mail.error ||
                                            (form.siret.value.length > 0 && form.siret.error) ||
                                            form.address.error ||
                                            form.postal.error ||
                                            form.city.error ||
                                            form.password.error ||
                                            form.confirmPassword.error
                                        ) &&
                                        <div className="card-panel red accent-1">
                                            {
                                                form.firstName.error ||
                                                form.lastName.error ||
                                                form.phoneNumber.error ||
                                                form.mail.error ||
                                                form.siret.error ||
                                                form.address.error ||
                                                form.postal.error ||
                                                form.city.error ||
                                                form.password.error ||
                                                form.confirmPassword.error
                                            }
                                        </div>
                                    }

                                </div>
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

export default RegisterForm;