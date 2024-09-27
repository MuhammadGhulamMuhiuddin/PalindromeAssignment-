var userInput = prompt("Enter your Word!");
var result = userInput.split('').reverse('').join('');
if(userInput === result){
    alert("Yep! Your word is Palindromic");
}else{
    alert("Nope! Your Word is not Palindromic \n Try Again!");
}; 
