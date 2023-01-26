import { prisma } from '../utils';
import { createJWT, hashPassword, comparePasswords } from '../utils';

//whern talking to a disc functions are alway async
export const createNewUser = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hashedPassword,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: 'nope' });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
