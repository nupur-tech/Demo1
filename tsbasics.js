//tuple
var isAdult = [18, true, 19, false];
console.log(isAdult);
isAdult[0] = 17;
isAdult[1] = false;
console.log(isAdult[0]);
//union
var isMarried;
isMarried = "Yes";
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
var firstname = "Sachin";
var lastname = "Deshpande";
var middlename;
function getFullName(fname, lname) {
    return (fname == "" ? firstname : fname) + " " + (lname == "" ? lastname : lname);
}
function getFullNamefromrecords(fname, lname, mname, gpname) {
    if (gpname === void 0) { gpname = ""; }
    if (mname == undefined) {
        console.log(fname + " " + lname);
    }
    else {
        console.log(fname + " " + mname + " " + lname);
    }
}
var fullName = function (fname, lname) {
    return fname + " " + lname;
};
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    console.log("Total = ", total);
}
add(10, 20);
add(10, 20, 30);
add(10, 20, 40, 50);
add(10, 20, 50, 60, 40);
/*console.log(fullName("Prachi","Joshi"))


console.log(getFullName("",""));

middlename = "Anil";

getFullNamefromrecords("Snehal","Kale","Prakash");
*/
