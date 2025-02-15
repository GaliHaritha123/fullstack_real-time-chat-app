module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your-secret-key-here'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'VSGY6OIYZLCvOi8/qIW4wA==') // Use your generated salt
  },
});

