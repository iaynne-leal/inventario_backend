const jwt = require("jsonwebtoken");

const generateJWT = (id_usuario, usuario) => {
  return new Promise((resolve, reject) => {
    const payload = {id_usuario,usuario};



    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn: '1h'},
        (err,token) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');

            }else{
                resolve(token);
            }
        }
    )
  });
};

module.exports = {
    generateJWT
}