from biblioteca import Biblioteca  # ← AGREGAR ESTA LÍNEA
import pytest

def test_crear_libro():
    biblioteca = Biblioteca()
    biblioteca.crear({"id": 1, "titulo": "Test"})
    assert len(biblioteca.libros) == 1

def test_leer_libro():
    biblioteca = Biblioteca()
    biblioteca.crear({"id": 1, "titulo": "Test"})
    libro = biblioteca.leer(1)
    assert libro["titulo"] == "Test"

def test_actualizar_libro():
    biblioteca = Biblioteca()
    biblioteca.crear({"id": 1, "titulo": "Viejo"})
    biblioteca.actualizar(1, {"titulo": "Nuevo"})
    assert biblioteca.leer(1)["titulo"] == "Nuevo"
    
def test_eliminar_libro():
    biblioteca = Biblioteca()
    biblioteca.crear({"id": 1, "titulo": "Test"})
    biblioteca.eliminar(1)
    assert len(biblioteca.leer_todos()) == 0