module.exports = ({ env }) => ({
  // Other plugins...
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', '3g+Kb5+MP+i894SvxGKC1Q==')
    },
  },
});
