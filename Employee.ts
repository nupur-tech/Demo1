export class Employee{
    protected ename :string;
    /*private age: number;
    private isMarried:boolean;
*/
constructor( empname :string,protected age: number,protected isMarried:boolean)
{
    this.ename = empname;
    this.age = age;
    this.isMarried= isMarried;
}
    getEmployeeDetails()
    {
        console.log("Employee Name: ", this.ename);
        console.log("Employee Age: ", this.age);
        console.log("Employee Married: ", this.isMarried);
    }
}