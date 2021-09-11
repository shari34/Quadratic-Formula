var a = 4
var b = 6
var c = 5
var root1;
var root2;
function findDiscriminant(){
  return  b * b - (4 * a * c);
}
function mulitiply(){
  return 2 * a;
}

const mulitiplyByA = mulitiply();
const discriminant = findDiscriminant();

if(discriminant === 0){
  console.log("The discriminat is equal to Zero than the solution of the quadratic formula is real and equal");
 var root = (b)/mulitiplyByA;
 root1 =`Root 1 : ${root}`
 console.log(root);
  
}else if(discriminant > 0 ){
  console.log("The discriminat is greater than Zero than the solution of the quadratic formula is real and different");
  var firstroot = (-b + Math.sqrt(discriminant))/mulitiplyByA;
  var secondroot = (-b - Math.sqrt(discriminant))/mulitiplyByA;
  root1 =`Root 1 : ${firstroot}`
  root2 =`Root 2 : ${secondroot}`
  console.log(root1);
  console.log(root2);
 }else if(discriminant < 0 ){
  console.log("The discriminat is smaller than Zero than the solution of the quadratic formula is real and different");
  var realPart=-b/mulitiplyByA
  var imaginaryPart=Math.sqrt(-discriminant)/mulitiplyByA;
  root1 =`Root 1 : ${realPart} + ${imaginaryPart.toFixed(6)}i`
  root2 =`Root 2 : ${realPart} - ${imaginaryPart.toFixed(6)}i`
  console.log(root1);
  console.log(root2);
}




 