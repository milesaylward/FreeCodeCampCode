/*
One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher,
where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. 
Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.

Solution By Miles Aylward
October 8th 2016
2:59 A.M.
*/




function rot13(str) { // LBH QVQ VG!
  var newString = "";
  for(var i = 0; i < str.length; i++){
    
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      tempCode = str.charCodeAt(i);
      if(tempCode - 13 >= 65){
        tempCode -= 13;
        tempStr = String.fromCharCode(tempCode);
        newString = newString + tempStr;
      }
      else{
        tempCode += 13;
        tempStr = String.fromCharCode(tempCode);
        newString = newString + tempStr;
      }
    }
    else{
      newString = newString + str[i];
    }
  }
  
  return newString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");