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

  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: 'Mike',
          age: 30,
          gender: 'male',
        });
      }, 500);
    });
  },

  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: 'bmw',
          name: 'z4',
          color: 'red',
        });
      }, 500);
    });
  },

  disconnectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },

  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};

module.exports = fn;
