const AUTH_TOKEN_KEY_NAME = 'token';

export type TokenType = string;

export function getToken() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);

  return token ?? '';
}

export function saveToken(token: TokenType) {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

export function dropToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}
