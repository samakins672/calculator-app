const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const nanoid = (size = 12) => {
  let id = '';
  const length = alphabet.length;
  for (let i = 0; i < size; i += 1) {
    const randomIndex = Math.floor(Math.random() * length);
    id += alphabet[randomIndex];
  }
  return id;
};
