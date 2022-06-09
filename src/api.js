export const loginFetch = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', username);
      resolve(username);
    } else {
      reject('Kullanıcı adı veya şifre hatalı.');
    }
  });
};

export const logout = callback => {
  localStorage.removeItem('user');
  callback();
};
