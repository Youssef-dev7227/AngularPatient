export class Patient {
    id: number;
    nom: string;
    email: string;

    constructor(id: number= 0 , nom: string = '', email: string = '') {
        this.id = id;
        this.nom = nom;
        this.email = email;
    }
}