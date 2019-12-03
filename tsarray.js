/*var cars : string[];
cars = ["BMW","VOLVO","MERCEDEZ","RENAULT","MARUTI"];

/*for(let i=0;i<cars.length;i++)
{
    console.log(cars[i]);
}

cars.forEach(function(value){
    console.log(value);
})*/
var employees = [
    { id: 100, name: 'Parag Joshi' },
    { id: 101, name: 'Pankaj Rathi' },
    { id: 102, name: 'Akash More' },
    { id: 103, name: 'Sanjana Kale' }
];
var employeeids = employees.map(function (emp) {
    return emp.id + " " + emp.name;
});
//console.log(employeeids);
var semployee = employees.filter(function (emp) {
    return emp.id == 101;
});
console.log(semployee);
