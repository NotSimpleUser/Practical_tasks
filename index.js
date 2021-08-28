//TASK1
function getModifiedArray(array) {
    const numberArray = [...array];
    numberArray[0] = 'Start';
    numberArray[numberArray.length - 1] = "End";
    return numberArray;
    }
    
    
//TASK2
    function combineArray(arr1, arr2) {
     let arr=arr1.concat(arr2);
     return arr.filter(el=>typeof el== "number");
    }
    
    
    
//TASK3
    function longestLogin(loginList) {
        return longlist.reduce((long, cur)=>long.lenght<=cur.lenght ? cur:long);
    }
    
    
    
    
//Task5
    function checkAdult(age) {
        try {
          switch (true) {
            case age === undefined || age === null:
              throw new Error("Please, enter your age");
            case age < 0:
              throw new Error("Please, enter positive number");
            case isNaN(age) || typeof age === 'string':
              throw new Error("Please, enter number");
            case Number.isInteger(age) === false:
              throw new Error("Please, enter Integer number");
            case age < 18:
              throw new Error("Access denied - you are too young!");
            default:
              console.log("Access allowed");
              break;
          }
        } catch(err) {
            console.log(err.name, err.message);
        } finally {
          console.log("Age verification complete");
        }
      }

//TASK4
