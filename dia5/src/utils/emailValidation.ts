export default (email: string): boolean => {
  const emailPattern = /\S+@\S+\.\S+/;

  if (!emailPattern.test(email)) return false;

  return true;
};
