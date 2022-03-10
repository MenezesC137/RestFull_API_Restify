module.exports = app => {
 
    app.get('/', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>RESTFUL API</h1><p>Servidor criado por Carlos Santos</p>');

    });
    
};