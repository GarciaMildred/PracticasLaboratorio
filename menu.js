feach (menu.json)

//Que hace esta linea inicia la carga del articulo menu.js, featch es una funcion del Javascript que facilita la realizacion de solicitudes de red como obtener  datos de un archivo o endpoint de API.
//Como funciona? feach devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos de un formato JSON , si no un objeto de repuesta que incluye varios detalles sobre la respuesta misma.
.then (response => response.json()) 
//Que hace? Esta linea toma el objeto de respuesta obtenido de la fecha y utliza el metodo.json() para convertir el cuerpo de la respuesta en un objeto Javascript(esto asume el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json() tambien devuelve una promesa , la cual se resuelve con el contenido del cuerpo en formato JSON.

.then(data => {
    const menuContainer = document.getElementById('menu-container');
    //Que hace? Aqui se procesan los datos JSON ya convertidos. Se obtiene una referencia el contenedor del menu en el HTML mediante getElementById('menu container'), y luego se itera sobre los elementos (categorias) del menu.
    data.items.forEach (category =>{
        const categoryTitle = document.('h2');
        //Que hace? Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido del texto, y luego se anade este titulo al contenedor menu.
        categoryTitle.textContent = category.category;
        menuContainer,appenChild(categoryTitle);

        const table = document.createElement('table');
        //Que hace? Se crea un elemento table para cada categoria. Ademas,se prepara el encabezado(tablehead) con las columnas pertinentes.tableBody se inicializa vacio y se llamara con los elementos de la categoria.
        const tableHead = `<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>`;
        let tableBody = ``;
    })
})