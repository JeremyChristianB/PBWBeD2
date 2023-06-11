import jwt from 'jsonwebtoken';

const authentication = (token) => {
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    return decode;
};

export default authentication;
