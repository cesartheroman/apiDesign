import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

//bcrypt functions return a promise, unless the sync version is explicitly used
export const comparePasswords = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );

  return token;
};

export const authenticate = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: 'not authorized' });
    return;
  }

  const [_, token] = bearer.split(' ');

  if (!token) {
    res.status(401);
    res.json({ message: 'not valid token' });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401);
    res.json({ message: 'not valid token' });
    return;
  }
};
