const GestorUsuarios = require('../src/usuarios');

describe(' TDD CRUD Usuarios', () => {
    let gestor;
    
    beforeEach(() => gestor = new GestorUsuarios());
    
    test(' crear usuario', () => {
        gestor.crear({id:1,nombre:'Juan'});  // 🔴 FAIL
        expect(gestor.usuarios.length).toBe(1);
    });
    
    test(' leer usuario', () => {
        gestor.crear({id:1,nombre:'Juan'});
        expect(gestor.leer(1).nombre).toBe('Juan');  // 🔴 FAIL
    });
});
   test('actualizar usuario', () => {
    gestor.crear({id: 1, nombre: 'Juan'});
    gestor.actualizar(1, {nombre: 'Juan Pérez'});
    expect(gestor.leer(1).nombre).toBe('Juan Pérez');  // 🔴 FAIL
});

test('eliminar usuario', () => {
    gestor.crear({id: 1, nombre: 'Juan'});
    gestor.eliminar(1);
    expect(gestor.usuarios.length).toBe(0);            // 🔴 FAIL
});