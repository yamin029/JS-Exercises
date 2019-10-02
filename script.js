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

if(validEmail("yaminkhan017@gmail.com")){
    console.log("You have entered a valid email")
}


//Task 4

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        updateStatus: function (read){ this.readingStatus = read}
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        updateStatus: function (read){ this.readingStatus = read}
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        updateStatus: function (read){ this.readingStatus = read}
    }];

    console.log(library[1].readingStatus)
    library[1].updateStatus(false);
    console.log("reading status",library[1].readingStatus)


    function readStatus(index){
        return library[index].readingStatus
    }

    console.log(readStatus(2))