function logger(){
    console.log('my name is');
}
logger();

//calling//running
  function fruitProcessor(apples, oranges){
      const juice = "Juice with "+apples+"appples and "+oranges;
      return juice;
  }
  //explain 
  const appleJuice = fruitProcessor(5,0);
  console.log(appleJuice);
  //declaration and expression
//declaration
  function calculdelAge1(anneeDeLaNaissance){
    //get current year with date object
    return (new Date().getFullYear()) - anneeDeLaNaissance;
  }
  const age1 = calculdelAge1(1996);
  //expression, which produces a value 
const calculdelAge2 =  function(anneedenaissance){
    return (new Date().getFullYear()) - anneedenaissance;
  }
  const age2 = calculdelAge2(1984);
  console.log(age1,age2);

