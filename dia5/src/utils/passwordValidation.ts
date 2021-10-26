export default (password: number): boolean => {
  if (
    typeof password !== 'number'
    || password.toString().length < 4
    || password.toString().length > 8
  ) {
    return false;
  }

  return true;
}