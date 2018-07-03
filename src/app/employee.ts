export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: number;
    address: string;
    userName: string;
    password: string;
    gender: string;
    qualification: string;
    experiance: string;
    codingLanguages: string[]

}

export class Employee implements IEmployee {

    constructor(   ) { }
        public id: number;
        public firstName: string;
        public lastName: string;
        public email: string;
        public contactNumber: number;
        public address: string;
        public userName: string;
        public password: string;
        public gender: string;
        public qualification: string;
        public experiance: string;
        public codingLanguages: string[]


 
}