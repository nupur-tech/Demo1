//tuple
var isAdult : [number,boolean,number,boolean] = [18,true,19,false];
console.log(isAdult);
isAdult[0] = 17;
isAdult[1] = false;
console.log(isAdult[0]);

//union
var isMarried : string|boolean;
isMarried = "Yes"
isMarried = true;
//isMarried = 2342


/*var str : string = "Hello Typescript !!";

var url="adsfa"; //any

var num : number = 10;

var isStudent : boolean = true;
var x = null;
var y;
/*console.log(str);
console.log(num);
console.log(isStudent);
console.log(x);
console.log(y);
*/

var firstname : string="Sachin";
var lastname : string ="Deshpande";
var middlename;

function getFullName(fname:string,lname:string):string {
return (fname==""?firstname:fname) + " " + (lname==""?lastname:lname); 
}

function getFullNamefromrecords(fname,lname,mname?,gpname=""){

    if (mname == undefined)
    {
    console.log(fname + " " +lname);
    }
    else
    {
        console.log(fname + " " + mname + " " +lname);
    }


}

var fullName = (fname:string,lname:string):string =>
{
    return fname + " " + lname;
}


function add (...nums:number[])
{
    var total=0;
    for(let i=0;i<nums.length;i++)
    {
        total+=nums[i];
    }
    console.log("Total = ", total);
    
}

add(10,20)
add(10,20,30)
add(10,20,40,50)
add(10,20,50,60,40)

/*console.log(fullName("Prachi","Joshi"))


console.log(getFullName("",""));

middlename = "Anil";

getFullNamefromrecords("Snehal","Kale","Prakash");
*/

