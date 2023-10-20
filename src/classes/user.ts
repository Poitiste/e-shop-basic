export default class User{
    id: number;
    firstName: string;
    lastName: string;
    mail: string;
    siret: string;
    phoneNumber: string;
    address: string;
    postal: string;
    city: string;
    password: string;
    typeAccount: string;
    created: Date;
    updated: Date;

    constructor(
        id:number,
        firstName: string="prénom",
        lastName: string="nom",
        mail: string="exemple@mail.com",
        siret: string="01234567891012",
        phoneNumber: string="0612345678",
        address: string="XX rue de l'église",
        postal: string="60800",
        city: string="Crépy-en-valois",
        password: string="***",
        typeAccount: string = "Client",
        created: Date = new Date(),
        updated: Date = new Date(),
    ){
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName;
        this.mail = mail;
        this.siret = siret;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.postal = postal;
        this.city = city;
        this.password = password;
        this.typeAccount = typeAccount;
        this.created = created;
        this.updated = updated;
    };
}