var ln1 = parseInt(document.getElementById("a").value);
 var ln2 = parseInt(document.getElementById("b").value);
 var ln3 = parseInt(document.getElementById("c").value);
 //defining the returning path
 var para = document.querySelector('p');
 // conditions for the program to meet for it to run effectively
  if (isNaN(ln1) || isNaN(ln2) || isNaN(ln3)){
      para.textContent = 'please input a number';
  }
  //conditions for values below 1 
  else if (ln1 <=1 || ln2 <= 1 || ln3 <=1){
      para.textContent = 'Invalid entry kindly type again';
  }
  //the foolowing code is for an equilateral triangle 

  else if (ln1===ln2 && ln2 === ln3 && ln3 ===ln1){
      para.textContent = 'The cordinates are for an equilateral Triangle';
  }
  //the following is an Issceles Triangle 
  else if 