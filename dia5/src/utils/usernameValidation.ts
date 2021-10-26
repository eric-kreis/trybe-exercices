export default (username: string): boolean => {
  if (username.length <= 3) return false;
  return true;
};
