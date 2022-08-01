import jwt from 'jsonwebtoken';

const jwtService = {
  createToken: (data: object) => {
    const token = jwt.sign(data, 'secret', {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return token;
  },
};

export default jwtService;
