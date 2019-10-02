/* JavaScript code here */
//task 1
console.log("External JS")

//task 2
var arry = [1,2,3,4,5,6,7,8,9];
function sumOfArray(arr){
    var sum =0;
    for(var i=0;i<10;i++)
    {
        sum =sum+ i;
    }
    console.log(sum);
};
sumOfArray(arry);
function arraySum(arr){
    let summ =0;
    // arr.forEach(element => {
    //     summ = summ + element;
    // })
    arr.forEach(function(element) {
        summ = summ + element;
    })
    return(multiplier) =>{return summ*multiplier}
}
let summm = arraySum(arry);
console.log(summm(2));

//Task 3
function validEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    /*if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
    return (true)
     }
    alert("You have entered an invalid email address!")
    return (false)
    */
}

validEmail("yaminkhan017@gmail.com")
