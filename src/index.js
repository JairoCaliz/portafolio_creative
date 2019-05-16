const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido a tu portafolio");
});

app.get("/usuarios", (req, res) => {
  let usuarios = [
    { id: "12", nombres: "Javier", apellidos: "Perez", password: "****", email: "javier@gmail.com", telefono: "3046573554", idgrado: "1"  },
    { id: "13", nombres: "Juan", apellidos: "Padilla", password: "****", email: "juanQgmail.com", telefono: "3205830954" , idgrado: "2"}
  ];
  res.send(usuarios);
});
app.get("/categorias", (req, res) => {
  let categorias = [
    { id: "12", nombre: "Matemáticas", descripcion: "ecuaciones de primer grado" },
    { id: "12", nombre: "Ciencias Naturales", descripcion: "reino animal"}
  ];
  res.send(categorias);
});
app.get("/grados", (req, res) => {
  let grados = [
    { id: "5", nombre: "6°", descripcion: "cuenta con 120 estudiantes" },
    { id: "6", nombre: "7°", descripcion: "cuenta con 140 estudiantes"}
  ];
  res.send(grados);
});
app.get("/producto_multimedia", (req, res) => {
  let producto_multimedia = [
    { id: "8", nombres: "infografia", descripcion: "fracciones", fecha_creacion: "15/05/2019", id_usuario: "11", id_categoria: "3"  },
    { id: "9", nombres: "diapositiva", descripcion: "el planeta tierra", fecha_creacion: "15/04/2019", id_usuario: "12", id_categoria: "4"}
  ];
  res.send(producto_multimedia);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
