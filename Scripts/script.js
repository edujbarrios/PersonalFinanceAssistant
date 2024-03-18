document.getElementById('form-ingresos').addEventListener('submit', function(e) {
    e.preventDefault();
    const descripcion = document.getElementById('descripcion-ingreso').value;
    const cantidad = parseFloat(document.getElementById('cantidad-ingreso').value);
    agregarElementoALista('lista-ingresos', descripcion, cantidad);
    actualizarTotal();
});

document.getElementById('form-gastos').addEventListener('submit', function(e) {
    e.preventDefault();
    const descripcion = document.getElementById('descripcion-gasto').value;
    const cantidad = parseFloat(document.getElementById('cantidad-gasto').value);
    agregarElementoALista('lista-gastos', descripcion, -cantidad);
    actualizarTotal();
});

function agregarElementoALista(idLista, descripcion, cantidad) {
    const lista = document.getElementById(idLista);
    const elemento = document.createElement('li');
    elemento.textContent = `${descripcion}: ${cantidad}€`;
    lista.appendChild(elemento);
}

function actualizarTotal() {
    const ingresos = obtenerTotalDeLista('lista-ingresos');
    const gastos = obtenerTotalDeLista('lista-gastos');
    const total = ingresos + gastos;
    document.getElementById('total').textContent = `${total}€`;
}

function obtenerTotalDeLista(idLista) {
    const lista = document.getElementById(idLista);
    let total = 0;
    for (let item of lista.children) {
        const valor = parseFloat(item.textContent.split(':')[1]);
        total += valor;
    }
    return total;
}

function agregarElementoALista(idLista, descripcion, cantidad) {
    const lista = document.getElementById(idLista);
    const elemento = document.createElement('li');
    // Modificación para incluir el símbolo de Euro
    elemento.textContent = `${descripcion}: ${cantidad.toFixed(2)}€`;
    lista.appendChild(elemento);
}