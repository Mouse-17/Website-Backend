import jwt from 'jsonwebtoken';
import config from '../config.js';

const protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized' });
    }
};

export default protect;
