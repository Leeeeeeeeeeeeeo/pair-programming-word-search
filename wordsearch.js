const transpose = function(matrix) {
    let temp = [];
    for (let i = 0; i < matrix[0].length; i++) {
      temp.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0 ; j < matrix[i].length; j++) {
          temp[j][i] = matrix[i][j];
      }
    }
    return temp;
  };


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) { 
        if(l.includes(word)) {
            return true
        }
    }
    const newLetters = transpose(letters)
    const horizontalJoin2 = newLetters.map(ls => ls.join(''))
    for (let l of horizontalJoin2) { 
        if(l.includes(word)) {
            return true
            }
        } 
        return false 
    } 

  
  module.exports = wordSearch 


  
