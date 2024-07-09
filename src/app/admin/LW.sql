use LevelWaterBD
CREATE TABLE Usuarios (Usuario VARCHAR(50) PRIMARY KEY, Nombre VARCHAR(50), Apellido VARCHAR(50), Passwd VARCHAR(50), TipoUsu VARCHAR(15));
INSERT INTO Usuarios VALUES ('Lessi','Leslie','Amaya', '1234','Empleado');

SELECT * FROM Usuarios;