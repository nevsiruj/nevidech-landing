import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  const data = {
    message: '¡Hola, esta es una API simple en Nuxt con TypeScript!',
    timestamp: new Date().toISOString(),
  };

  res.status(200).json(data);
};
