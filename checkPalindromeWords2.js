function checkPalindromeWords(value) {
  let str = value.toString().toUpperCase();
  let reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) {
      console.log(`${value} is a palindrome`);
  } else {
      console.log(`${value} is not a palindrome`);
  }
}
checkPalindromeWords("Kayak");   
checkPalindromeWords("cool");    
checkPalindromeWords("Done"); 
checkPalindromeWords("deified");
checkPalindromeWords("delete"); 
checkPalindromeWords("Nan");     
checkPalindromeWords(12321);
checkPalindromeWords("Haah"); 
checkPalindromeWords(87878890);
checkPalindromeWords(555555);
checkPalindromeWords(909090);
checkPalindromeWords(644446);
