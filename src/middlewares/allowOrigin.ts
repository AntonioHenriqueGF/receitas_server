export function allowOrigin(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Header' , 'Content-Type');
    next();
}