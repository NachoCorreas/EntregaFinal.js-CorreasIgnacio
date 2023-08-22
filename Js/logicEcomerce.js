console.table(zapasAdidas);
console.table(zapasConverce);
console.table(zapasNike);
let tablaBody = document.getElementById('tablabody');
let carro = JSON.parse(localStorage.getItem('carro')) || [];
let totalCarro = 0;
let cantCarro = document.getElementById('cantCarro');
cantCarro.innerText = `🎁${carro.length}`;

if (carro.length != 0) {
    for (const prod of carro) {
        //agregar fila a la tabla de carrito
        document.getElementById('tablabody').innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
               
        `;
    }}
//lista de productos Converse
let contZapasConverce = document.getElementById('misprods');
function renderizarProductos(listaProdConverce){
let btnConver = document.getElementsByClassName('convBtn');
for(const boton of btnConver){
    boton.addEventListener('click',()=>{
        contZapasConverce.innerHTML='';
        //cargamos las cartas de las zapas
        for(const prod of listaProdConverce){
            contZapasConverce.innerHTML+=`
                <div class="card col-sm-2">
                    <img class="card-img-top ImgFija " src=${prod.foto} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">$ ${prod.precio}</p>
                        <p class="card-text">Talle: ${prod.talle}</p>
                        <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                    </div>
                </div>
            `;}
            //boton para agregar al carrito
let btnCompra = document.getElementsByClassName('compra');
for (const boton of btnCompra){
    boton.addEventListener('click',()=>{
        console.log('me toma el bonton de compra '+boton.id);
        const prodACarro = zapasConverce.find((producto) => producto.id == boton.id);
        agregarACarrito(prodACarro);
        localStorage.setItem('carro', JSON.stringify(carro));
    })
}})
boton.onmouseover = () => boton.classList.replace('btn-light', 'btn-warning');
boton.onmouseout = () => boton.classList.replace('btn-warning','btn-light');
}}
renderizarProductos(zapasConverce);
//funcion para agregar las zapas al carrito
function agregarACarrito(producto){
    carro.push(producto);
    cantCarro.innerText = `🎁${carro.length}`;
    tablaBody.innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.talle}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    totalCarro += producto.precio;
    document.getElementById('totalCarro').innerText = `Total: $${totalCarro}`;
    localStorage.setItem('carro', JSON.stringify(carro));
}
//funcion para vaciar el carro
document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);
function vaciarCarrito() {
    carro.length = 0; 
    cantCarro.innerText = `🎁${carro.length}`;
    tablaBody.innerHTML = '';
    totalCarro = 0;
    document.getElementById('totalCarro').innerText = `Total: $${totalCarro}`;
    localStorage.removeItem('carro');
}

//lista de productos adidas
let contZapasAdidas = document.getElementById('misprods');
function renderizarProductosAdid(listaProdAdidas){
let btnAdidas = document.getElementsByClassName('adiBtn');
for(const boton of btnAdidas){
    boton.addEventListener('click',()=>{
        contZapasAdidas.innerHTML='';
        //cargamos las cartas de los productos solicitados
        for(const prod of listaProdAdidas){
            contZapasAdidas.innerHTML+=`
                <div class="card col-sm-2">
                    <img class="card-img-top ImgFija " src=${prod.foto} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">$ ${prod.precio}</p>
                        <p class="card-text">Talle: ${prod.talle}</p>
                        <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                    </div>
                </div>
            `;}
let btnCompra = document.getElementsByClassName('compra');
for (const boton of btnCompra){
    boton.addEventListener('click',()=>{
        console.log('me toma el bonton de compra '+boton.id);
        const prodACarro = zapasAdidas.find((producto) => producto.id == boton.id);
        agregarACarrito(prodACarro);
        localStorage.setItem('carro', JSON.stringify(carro));
    })
}})
boton.onmouseover = () => boton.classList.replace('btn-light', 'btn-warning');
boton.onmouseout = () => boton.classList.replace('btn-warning','btn-light');
}}
renderizarProductosAdid(zapasAdidas);
//funcion para agregar las zapas al carrito
function agregarACarrito(producto){
    carro.push(producto);
    cantCarro.innerText = `🎁${carro.length}`;
    tablaBody.innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.talle}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    totalCarro += producto.precio;
    document.getElementById('totalCarro').innerText = `Total: $${totalCarro}`;
    localStorage.setItem('carro', JSON.stringify(carro));
}
//funcion para vaciar el carro
document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);
function vaciarCarrito() {
    carro.length = 0; 
    cantCarro.innerText = `🎁${carro.length}`;
    tablaBody.innerHTML = '';
    totalCarro = 0;
    document.getElementById('totalCarro').innerText = `Total: $${totalCarro}`;
    localStorage.removeItem('carro');
}

//lista de productos Nike
let contZapasNike = document.getElementById('misprods');
function renderizarProductosNike(listaProdNike){
let btnNike = document.getElementsByClassName('nikeBtn');
for(const boton of btnNike){
    boton.addEventListener('click',()=>{
        contZapasNike.innerHTML='';
        //cargamos las cartas de los productos solicitados
        for(const prod of listaProdNike){
            contZapasNike.innerHTML+=`
                <div class="card col-sm-2">
                    <img class="card-img-top rounded ImgFija" src=${prod.foto} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">$ ${prod.precio}</p>
                        <p class="card-text">Talle: ${prod.talle}</p>
                        <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                    </div>
                </div>
            `;}
let btnCompra = document.getElementsByClassName('compra');
for (const boton of btnCompra){
    boton.addEventListener('click',()=>{
       
        console.log('me toma el bonton de compra '+boton.id);
        const prodACarro = zapasNike.find((producto) => producto.id == boton.id);
        
        agregarACarrito(prodACarro);
        localStorage.setItem('carro', JSON.stringify(carro));
    })
}})
boton.onmouseover = () => boton.classList.replace('btn-light', 'btn-warning');
boton.onmouseout = () => boton.classList.replace('btn-warning','btn-light');
}}
renderizarProductosNike(zapasNike);
//funcion para agregar las zapas al carrito
function agregarACarrito(producto){
    carro.push(producto);
    cantCarro.innerText = `🎁${carro.length}`;
    Swal.fire({
        title: 'Bienvenido al Club',
        text: `${producto.nombre} Agregado al Carrito!🏀`,
        imageUrl: producto.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: producto.nombre,
      })
    tablaBody.innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.talle}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    
    totalCarro += producto.precio;
    document.getElementById('totalCarro').innerText = `Total: $${totalCarro}`;
    localStorage.setItem('carro', JSON.stringify(carro));
}
//funcion para vaciar el carro
document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);
function vaciarCarrito() {
    if (carro.length === 0) {
        return;
    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
        swalWithBootstrapButtons.fire({
            title: 'Estas Seguro??😢',
            text: "No Te Vas a Arrepentir? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, aunque duela',
            cancelButtonText: 'No, me las merezco!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
            carro.length = 0; 
            tablaBody.innerHTML = '';
            localStorage.removeItem('carro');
            totalCarro = 0;
            document.getElementById('totalCarro').innerText = `Total: $${totalCarro}`;
              swalWithBootstrapButtons.fire(
                'Borrado con dolor!',
                'No quiero ni Mirar.',
                'error',
              )
              cantCarro.innerText = `🎁${carro.length}`;
              
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'VAAAAAMOOO!',
                'Queres ver algo mas? :)',
                'success'
              )
            }
          })
      
     
}

const GuardarUsuario = document.getElementById('guardarUsuario');
const NombreUsuario = document.getElementById('nombreUsuario');
// funcion para guardar USUARIO
GuardarUsuario.addEventListener('click', () => {
    const nombreUsuario = NombreUsuario.value.trim();
    if (nombreUsuario !== '') {
        localStorage.setItem('usuario', nombreUsuario);
        NombreUsuario.value = '';
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Tu Usuario a sido Guardado con Exito',
            showConfirmButton: false,
            timer: 1500
          })
    }
});

const guardarMail = document.getElementById('contacto');
const btnGuardarEmail = document.getElementById('btnEmail');

btnGuardarEmail.addEventListener('click', () => {
    const email = contacto.value.trim();
    if (email !== '' && email.includes('@')) {
        localStorage.setItem('contacto', email);
        contacto.value = '';
        Swal.fire({
            position: 'bottom',
            icon: 'success',
            title: 'Tu mail a sido Guardado con Exito',
            showConfirmButton: false,
            timer: 1500
          })
    }
});

//get a json local

function JsonLocal() {
    const URLJSON = "./camisetas.json";
    fetch(URLJSON)
    .then(resp => resp.json())
    .then(data => {
        // Inyeccion al DOM
        let promo = data.camisetas;
        let tablaPromo = document.getElementById("tablaPromo"); 
        // Inyeccion Camisetas del JSON
        for (const prod of promo) {
            tablaPromo.innerHTML += `
                <div class="card col-sm-2 ">
                    <img class="card-img-top rounded ImgFija" src=${prod.url} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">$ ${prod.precio}</p>
                        <p class="card-text">Aprovecha Nuestras Remeras en Promo!!
                        Subscribite asi te enteras de las PROMOS</p>
                    </div>
                </div>
            `;
        }
    }
    )
    .catch(error => {
        console.error("Error JSON:", error);
    });
    
}

JsonLocal();



