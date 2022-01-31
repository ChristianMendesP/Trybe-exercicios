const uppercase = (str, callback) => {
  setTimeout(() => {
    const result = str.toUpperCase();
    callback(result);
  }, 500);
};

test('returns "M" if "m" is the parameter', (done) => {
  // test the callback function
  uppercase('m', (resul) => { // test is inside the callback
    try {
      expect(resul).toBe('M'); // throw an error if the test fails
      done(); // tells to wait
    } catch (error) { // catch the error
      done(error);
    }
  })
})