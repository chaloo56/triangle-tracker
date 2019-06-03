function triangleTracker(){
var ln1 = parseInt(document.getElementById("a").value);
var ln2 = parseInt(document.getElementById("b").value);
var ln3 = parseInt(document.getElementById("c").value);
 //defining the returning path
var parp = document.querySelector('.text-p');
 // conditions for the program to meet for it to run effectively
  if (isNaN(ln1) || isNaN(ln2) || isNaN(ln3)){
      parp.textContent = 'please input a number';
  }
  //conditions for values below 1 
  else if (ln1 <= 0 || ln2 <= 0 || ln3 <= 0){
      parp.textContent = 'Invalid entry kindly type again';
  }
  //conditions 
  else if ((ln2+ln2) <= (ln3) || (ln1+ln3) <= (ln2) || (ln2+ln3)<= (ln1)) {
    parp.textContent = 'the coordinates cant make a triangle';
  }
  //the foolowing code is for an equilateral triangle 

  else if (ln1===ln2 && ln2 === ln3 && ln3 ===ln1){
      parp.textContent = 'The cordinates are for an equilateral Triangle';
  }
  //the following is an Issceles Triangle 
  else if (ln1 === ln2 || ln2 == ln3 || ln3 ===ln1){
    parp.textContent = 'The cordinates are for an Isosceles Triangle';
  }
   //the following is an scalene Triangle
   else {
       parp.textContent = 'This is A Scalene Triangle ';
   }
}