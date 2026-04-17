class Biblioteca:
    def __init__(self):
        self.libros = []
    
    def crear(self, libro):
        self.libros.append(libro)
    
    def leer(self, id):
        for libro in self.libros:
            if libro["id"] == id:
                return libro.copy()
        raise ValueError("Libro no encontrado")
    
    def leer_todos(self):
        return self.libros.copy()
    
    def actualizar(self, id, datos):
        for i, libro in enumerate(self.libros):
            if libro["id"] == id:
                self.libros[i].update(datos)
                return
        raise ValueError("Libro no encontrado")
    
    def eliminar(self, id):
        for i, libro in enumerate(self.libros):
            if libro["id"] == id:
                self.libros.pop(i)
                return
        raise ValueError("Libro no encontrado")