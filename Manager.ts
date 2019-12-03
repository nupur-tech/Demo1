
import {IContact} from './Icontact'
import {Employee} from './Employee'

export class Manager extends Employee implements IContact {
    mobile:number;
    email:string;
        constructor(ename:string,age:number,isMarried:boolean,private skill:string
            ,mobile:number,email:string
            ){
            super(ename,age,isMarried);
            this.skill = skill;
            this.mobile = mobile;
            this.email = email;
        }
        getContactDetails()
        {
            console.log(this.mobile)
            console.log(this.email)
        }
        getEmployeeDetails()
        {
            super.getEmployeeDetails();
            console.log('Skills ', this.skill)
            this.getContactDetails();
        }
    
    }
    