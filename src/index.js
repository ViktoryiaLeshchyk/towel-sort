
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
  if (matrix !== undefined) 
    {
       if (matrix.length > 0) {
          let result = Array(); 
          for (let i = 0; i < matrix.length; i++) {
             const elem = matrix[i]; 
             if(i%2 == 0)  { 
               result = result.concat(elem); }
             else { 
               result = result.concat(elem.reverse()); }
             }
              return result; } 
            else {
               return [];  } 
            }
             return []; 
            }








      