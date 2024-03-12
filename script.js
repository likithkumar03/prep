
// Example for promises
// let stepone = () => {
//     return new Promise((resolve, reject) => {
//         if(true){
//             console.log("I am step 1");
//             resolve();
//         }else{
//             reject();
            
//         }
//     });
// }


// let steptwo = () => {
//     console.log("i am step two");
// }


// stepone()
// .then(()=>{
//     steptwo();
// })
// .catch(()=>{
//     console.log("error")
// })


// async // await


// let stepone = ()=>{
//     return new Promise((resolve, reject) => {
//         if(false){
//             console.log("step one done")
//         resolve();
//         }
//         else{
//             reject("error")
//         }
//     })
// }


// let steptwo = ()=>{
//     return new Promise((resolve, reject) => {
//         if(true){
//             console.log("step two done")
//         resolve();
//         }
//         else{
//             reject("error")
//         }
//     })
// }


// async function working(){
//     try{
//         await stepone();
//         await steptwo();
//     }
//     catch{
//         console.log("error");
//     }
// }

// working();


// function createcloser(){
//     let a = prompt(document.querySelector("#num").value);
//     function innerfun(x){
//         a = x
//     }

//     return innerfun;
// }

// let z = createcloser();
// console.log(z)
// z(x);


// let url = "https://fakestoreapi.com/products"


// let id_data = fetch(url)
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     for(let item in data){
//         console.log(data[item].id)
//     }
// })


// console.log(id_data);

// let givennum = 5;
// for(let i = 1;i<=givennum;i++){
//     givennum += i;

// }
// console.log(givennum)

// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

function fibonacci(n){
    let n1 = 0;
    let n2 = 1;
    let nextterm;
   
    for(let i = 1;i<n;i++){
        console.log("first finonacci no is:",n1);
        nextterm = n1 + n2;
        n1 = n2;
        n2 = nextterm;
    }

}


console.log(fibonacci(8));



// palindrome

function isPalindrome(str) {
    // Initialize start and end indices
    let start = 0;
    let end = str.length - 1;
    
    // Loop through the string
    while (start < end) {
        // Compare characters at start and end indices
        if (str[start] !== str[end]) {
            // If characters are not the same, return false
            return false;
        }
        // Move to the next characters
        start++;
        end--;
    }
    // If loop completes without returning false, string is a palindrome
    return true;
}

// Testing the function
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("racecar")); // Output: true







 