const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const donadoresRouter = require("./rutas/donadores");
const donatariosRouter = require("./rutas/donatarios");
const proyectosRouter = require("./rutas/proyectos");
const app = express();

process.env.port = 4001;

app.use(cors());
app.use(express.json());

app.use("/proyectos", proyectosRouter);
app.use("/donatarios", donatariosRouter);
app.use("/donadores", donadoresRouter);

const llavePrivada = fs.readFileSync('private.key');
const certificado = fs.readFileSync('certificate.crt');
const credenciales = {
  key: llavePrivada,
  cert: certificado,
  passphrase: 'webpass'
};

const httpsServer = https.createServer(credenciales, app);

httpsServer.listen(process.env.port, () => {
  console.log('Servidor https escuchando por el puerto:', process.env.port);
}).on('error', err => {
  console.log('Error al iniciar el servidor', err);
});