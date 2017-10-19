 
 function romanToInteger(s){
    var result = 0 
    
       for(var i = 0; i < s.length; i++){
        if(i > 0 && (convertingRomanToInteger(s[i]) > convertingRomanToInteger(s[i-1]))){
            result -= 2*convertingRomanToInteger(s[i-1]);  
        }
        
        result += convertingRomanToInteger(s[i]);
      }
      return result;
 }
 
 function convertingRomanToInteger(c){
   switch(c){
     case 'I': return 1;
     case 'V': return 5;
     case 'X': return 10;
     case 'L': return 50;
     case 'C': return 100;
     case 'D': return 500;
     case 'M': return 1000;
   }
 }
 
 romanToInteger('IX')