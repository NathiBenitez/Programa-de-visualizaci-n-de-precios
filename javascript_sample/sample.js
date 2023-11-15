greeting(); // Llamada antes de la declaración

function greeting() {
  console.log("Buenas tardes.");
}
let number = 1;
{
  let string = "A";
  console.log(string);
  console.log(number);
}
console.log(typeof(1));
console.log(typeof("Hello,World"));
console.log(typeof(true));
let a = 2;
console.log(++a); //Aumenta el valor de a en 1 y luego evalúa el valor de a para que sea 2
console.log(a++); //El valor de a se incrementa en 1 después de la evaluación, por lo que permanece en 2.
console.log(a++); //3 se valora como se ha incrementado en 1 arriba y luego se incrementa en 1.
let name = "Alice";
let age = 10;
console.log("La edad de " + name + " es " + age );