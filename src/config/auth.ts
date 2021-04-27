export default {
  jwt: {
    secret: process.env.APP_SECRET || 'abc',
    expiresIn: '1d',
  },
};
