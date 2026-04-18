class GestorUsuarios {
    constructor() {
        this.usuarios = [];
    }
    
    crear(usuario) {
        this.usuarios.push(usuario);
    }
    
    leer(id) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (!usuario) throw new Error('No encontrado');
        return {...usuario};
    }
    
    actualizar(id, datos) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index !== -1) {
            this.usuarios[index] = {...this.usuarios[index], ...datos};
        }
    }
    
    eliminar(id) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
        }
    }
}
module.exports = GestorUsuarios;