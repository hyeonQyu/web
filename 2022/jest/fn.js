const fn = {
  add: (num1, num2) => {
    return num1 + num2;
  },

  makeUser: (name, age) => {
    return {
      name,
      age,
      gender: undefined,
    };
  },

  throwError: () => {
    throw new Error('Error!');
  },

  getName: (callback) => {
    const name = 'Mike';
    setTimeout(() => {
      callback(name);
    }, 3000);
  },

  getAge: () => {
    const age = 30;
    return new Promise((res) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
};

module.exports = fn;
