const miObjeto = {
  "attr1" : 2,
  "attr2" : "spring"
}

const objeto2 = miObjeto
miObjeto.attr2 = "Nayo"
console.log(miObjeto)
console.log(objeto2)

const objeto3 = {...miObjeto}
objeto3.attr3 = "unNuevo atributo"
console.log(objeto3)
console.log(miObjeto)

const objetoDeep = JSON.parse(JSON.stringify(miObjeto))


const cuadradoForEach =[1,2,3].forEach(el => el*el);
const cuadradoMap = [1,2,3].map(el => el*el);

console.log(cuadradoMap)
console.log(cuadradoForEach);
