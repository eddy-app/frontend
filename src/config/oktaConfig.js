export default {
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  issuer: `${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};
