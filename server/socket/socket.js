const {io} = require('../server')

io.on("connection", (client) => {
  console.log("Usuario Conectado");

  let fecha = new Date().getDate();

  client.emit("EnviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido al Chat del SNE",
    fecha,
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Escuchar el cliente.
  client.on("EnviarMensaje", (data, callback) => {
    console.log(data);

    client.broadcast.emit('EnviarMensaje', data);

   /* if (mensaje.usuario) {
      callback({
        mensaje: "TODO SALIÓ BIEN",
      });
    } else {
      callback({
        mensaje: "TODO SALIÓ MALLLL",
      });
    }

    callback();*/
  });
});
