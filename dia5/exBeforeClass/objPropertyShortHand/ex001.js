// without feature property shorthand.

const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com'));

// with feature property shorthand.

const newU = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newU(54, 'isabella', 'isabella@email.com')); 