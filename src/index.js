module.exports = function zeros(expression) {
  let sumOfZeros = 0;
  let arrayFromString = expression.split("");
  let num = ""; 
  let fucNum ="";
  let arrayOfNum = [];
  arrayFromString.push("*");
  
  arrayFromString.forEach(element => {
    if(element !="!" && element !="*"){
      num += element;
    } else if (element == "!"){
        fucNum += element;
    } else {
      for (var i = BigInt(Number(num)), sum = BigInt(1) ; i>0 ; i -= BigInt(fucNum.length)){
        sum *= i;
      }
      arrayOfNum.push(BigInt(sum));
      sum = 1;
      num = "";
      fucNum = "";
    }
  });

  let ProcessingString = BigInt(arrayOfNum.reduce((a,b)=>a*b));
  ProcessingString = ProcessingString.toString();
  let j = ProcessingString.length-1 ;
  
  while(true){ 
    if(ProcessingString[j] == '0'){
      sumOfZeros++ ;
      j-- ;
    } else { break; }
  }

  return sumOfZeros;
}

