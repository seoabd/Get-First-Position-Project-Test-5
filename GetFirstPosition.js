function getFirstPosition(values, value) {
    let result = -1; // we start with -1 if we dont value is not found to values
    for(let i = 0; i < values.length; i++){  
      if(value === values[i]){ //check if the parameter value is equal to index of parameter Values
        result = i; //here we store the index
        break;
      }
    }
    return result;    //return values.indexOf(value); the second short method to solve the Project with the function indexOf
  }
