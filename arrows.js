/*arrow 0 parametros */
let saludo=()=>"profe,buenas tardes";
console.log (saludo());

/*arrow 1 parametro */
const duplicar =(num)=>num*5;
console.log(duplicar(20));

const ConversorMayuscula=(nom)=>{ return nom.toUpperCase();
};
const nom=ConversorMayuscula("isabel");
console.log(nom);

/*arrow 3 parametros */
const sumar =(i,s,a)=>i+s+a;
let resultado=sumar (6,8,9)
console.log("El resultado de la suma es:",resultado);

/*arrow 5 parametros */

let operaciones=(r,o,j,a,s)=>{
return r-o*j+a/s};
let respuesta= operaciones(20,1,10,5,18)
console.log("El resultado de la suma es:",respuesta);










