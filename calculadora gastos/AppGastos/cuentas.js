window.addEventListener("load", () => {

  class InformacionGasto {
    id;
    nombre;
    gasto;
  
    constructor(id, nombre, gasto) {
      this.id = id;
      this.nombre = nombre;
      this.gasto = Number(gasto);
    }
  }
  
  let data = [];
  let botonAgregar = document.querySelector("#botonAgregar");
  let gastoTotal = document.querySelector("#gastoTotal");

  function Calcular () {
    
    let sumaTotal = data.reduce((total, elemento) => {
      return total + elemento.gasto;
    }, 0).toFixed(2)

    let pagar = sumaTotal > 0 ? (sumaTotal / data.length).toFixed(2) : 0;

    gastoTotal.innerHTML = `
      <p>El total gastado fue: ${sumaTotal} </p>
      <p>Cada uno debe pagar: ${pagar}</p>
    `;
  
  }
  
  function generateId() {
    if (data.length === 0) { 
      return 1; 
    }
    
    return data[data.length - 1].id + 1;
  }

  
  botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let gasto = document.querySelector("#dinero").value;
    
    let nuevaEntrada = new InformacionGasto(generateId(), nombre, gasto);
  
    data.push(nuevaEntrada);
    Calcular();
    Imprimir();
  })
  

  
  function Imprimir() {
    let lista = document.getElementById("listaGastos");
    lista.innerHTML = "";
    for(let entrada of data){
      lista.innerHTML += `<tr> 
      <td style="text-align: center">${entrada.id}</td>
      <td style="text-align: center">${entrada.nombre}</td>
      <td style="text-align: center">${entrada.gasto}</td>
     
      </tr>`
    }
    
   
  }

})

