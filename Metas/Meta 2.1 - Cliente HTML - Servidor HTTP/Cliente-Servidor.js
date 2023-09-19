const http = require('http');
const url = require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url);
const path = parsedUrl.pathname;

if (req.method === 'GET') {
    if (path === '/') {
    // Si se invoca la ruta raíz con un navegador
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const headersJSON = JSON.stringify(req.headers, null, 2);

    res.end(`
        <h1>Respuesta GET en la ruta raíz</h1>
        <h2>Headers:</h2>
        <pre>${headersJSON}</pre>
        <h2>Método: GET</h2>
        <h2>URL: ${path}</h2>
        <form method="post" action="/ruta-post">
        <input type="text" name="campo1" placeholder="Ingrese campo1">
        <button type="submit">Enviar</button>
        </form>
    `);
    } else {
    // Resto de las rutas GET
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Respuesta GET en una ruta diferente</h1>');
    }
} else if (req.method === 'POST') {
    if (path === '/ruta-post') {
    // Procesar los datos del formulario POST
    let requestBody = '';
    req.on('data', (data) => {
        requestBody += data;
    });

    req.on('end', () => {
        const postData = querystring.parse(requestBody);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const postDataFormatted = querystring.stringify(postData);
        const headersJSON = JSON.stringify(req.headers, null, 2);

        res.end(`
        <h1>Respuesta POST en /ruta-post</h1>
        <h2>Headers:</h2>
            <pre>${headersJSON}</pre>
        <h2>Método: POST</h2>
        <h2>URL: ${path}</h2>
        <h2>Datos enviados: ${postDataFormatted}</h2>
        `);
    });
    } else {
    // Resto de las rutas POST
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Respuesta POST en la ruta predeterminada</h1>');
    }
} else {
    // Método no permitido
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Método no permitido</h1>');
}
});

server.listen(port, hostname, () => {
console.log(`Servidor en ejecución en http://${hostname}:${port}/`);
});