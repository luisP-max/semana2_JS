const productos = {
    1: {
        id: 1,
        nombre: "Laptop Dell XPS",
        precio: 1250000
    },
    2: {
        id: 2,
        nombre: "Mouse Logitech",
        precio: 45000
    },
    3: {
        id: 3,
        nombre: "Teclado Mecánico",
        precio: 85000
    },
    4: {
        id: 4,
        nombre: "Monitor 27\"",
        precio: 650000
    }
};

// validacion de productos
/**
 * Función para validar que un producto tenga toda la información requerida.
 * @param {Object} producto - El producto a validar
 * @returns {boolean} - true si es válido
 */
function validarProducto(producto) {
    if (!producto || typeof producto !== 'object') {
        console.error("Producto inválido: no es un objeto");
        return false;
    }
    
    if (typeof producto.id !== 'number' || producto.id <= 0) {
        console.error("Producto inválido: id debe ser un número positivo");
        return false;
    }
    
    if (typeof producto.nombre !== 'string' || producto.nombre.trim() === '') {
        console.error("Producto inválido: nombre no puede estar vacío");
        return false;
    }
    
    if (typeof producto.precio !== 'number' || producto.precio <= 0) {
        console.error("Producto inválido: precio debe ser un número positivo");
        return false;
    }
    
    return true;
}

// Validamos todos los productos existentes
console.log("=== Validación de Productos ===");
Object.values(productos).forEach(prod => {
    const esValido = validarProducto(prod);
    console.log(`Producto ${prod.id} (${prod.nombre}): ${esValido ? 'VÁLIDO' : 'INVÁLIDO'}`);
});

console.log("\n=== TASK 2: Set para números únicos ===");

// Creamos un Set con valores repetidos (el Set elimina duplicados automáticamente)
const numeros = new Set([10, 20, 30, 20, 40, 10, 50]);
console.log("Set después de crear con duplicados:", numeros);

// Agregar un nuevo número
numeros.add(60);
console.log("Después de .add(60):", numeros);

// Verificar si existe un número
console.log("¿Existe el 30?", numeros.has(30));
console.log("¿Existe el 100?", numeros.has(100));

// Eliminar un número
numeros.delete(20);
console.log("Después de .delete(20):", numeros);

// Recorrer el Set con for...of
console.log("Recorriendo el Set con for...of:");
for (let numero of numeros) {
    console.log(`Número: ${numero}`);
}

console.log("\n=== TASK 3: Map de Categorías ===");

/**
 * Map donde la clave es la categoría y el valor es un objeto con información del producto.
 * Esto permite almacenar más información asociada.
 */
const productosPorCategoria = new Map();

// Llenamos el Map usando los productos del objeto
Object.values(productos).forEach(producto => {
    let categoria;
    
    if (producto.nombre.toLowerCase().includes("laptop") || producto.nombre.toLowerCase().includes("monitor")) {
        categoria = "Electrónica";
    } else if (producto.nombre.toLowerCase().includes("mouse") || producto.nombre.toLowerCase().includes("teclado")) {
        categoria = "Accesorios";
    } else {
        categoria = "Otros";
    }
    
    productosPorCategoria.set(categoria, {
        nombre: producto.nombre,
        precio: producto.precio,
        id: producto.id
    });
});

// Agregamos una categoría más para demostrar
productosPorCategoria.set("Software", {
    nombre: "Licencia Windows 11",
    precio: 450000,
    id: 5
});

console.log("Map creado:", productosPorCategoria);

console.log("\n=== TASK 4: Iteraciones ===");

// 4.1 for...in sobre el objeto productos
console.log("1. Recorriendo objeto 'productos' con for...in:");
for (let clave in productos) {
    const producto = productos[clave];
    console.log(`Clave: ${clave} ->`, producto);
}

// Usando métodos de Object
console.log("\nUsando Object.keys():");
Object.keys(productos).forEach(key => {
    console.log(`ID ${key}:`, productos[key].nombre, `- $${productos[key].precio}`);
});

console.log("\nUsando Object.entries():");
Object.entries(productos).forEach(([id, producto]) => {
    console.log(`Producto ${id}: ${producto.nombre} - Precio: ${producto.precio}`);
});

// 4.2 for...of sobre el Set (ya se hizo en Task 2)

// 4.3 forEach sobre el Map
console.log("\n3. Recorriendo Map con forEach:");
productosPorCategoria.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} → Producto: ${valor.nombre} ($${valor.precio})`);
});

console.log("\n=== TASK 5: Resumen Final ===");

console.log("1. Lista completa de productos (Objeto):");
console.table(Object.values(productos));

console.log("\n2. Números únicos (Set):");
console.log([...numeros]); // convertimos a array para verlo mejor

console.log("\n3. Productos por categoría (Map):");
productosPorCategoria.forEach((valor, clave) => {
    console.log(`[${clave}] ${valor.nombre} - $${valor.precio}`);
});

console.log("\n Todas las estructuras de datos han sido creadas y manipuladas correctamente.");