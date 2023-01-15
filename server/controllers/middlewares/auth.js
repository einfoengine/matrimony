import jwt from 'jsonwebtoken';
import User from '../../models/User.js';

const auth = (excluding = []) => {
        return async (req, res, next) => {
            if (excluding.includes(req.originalUrl)) {
                return next();
            }
            const {authorization} = req.headers;
            if (!authorization){
                return res.status(403).send("Unauthorized!");
            }
            const token = authorization.split(/\s+/g).pop();
            try{
                const {_id} = jwt.verify(token, process.env.SECRET);

                const user = await User.findById(_id);
                delete user.password;
                req.user = user;

                next();
            } catch (e) {
                return res.status(403).send("Unauthorized!");
            }
    };
}

export default auth;