// Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix(strs){
  
  var length = strs.length
  var result = ""
  
  if(length===0){
    return result
  }
  
  for(var i=0; i < strs[0].length; i++){
    var currentChar = strs[0][i]
    
    for(var j=0; j<length; j++){
      if(currentChar!== strs[j][i]){
        return result
      }
      
      if(strs[j].length===i){
        return result
      }
    }
    result+=currentChar;
  }
  
	return result
}

longestCommonPrefix(["uui","iik","uuii","iiuu"])