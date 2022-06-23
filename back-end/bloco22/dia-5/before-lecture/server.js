const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const generator = require('generate-password');

app.use(bodyParser.json());

function validateUsername (req, res, next) {
  const { username } = req.body;
  if (username.length < 3) return res.status(400).json({ message: 'Invalid data!'}); // 1
  next(); // 2
}

function validateEmail(req, res, next) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const { email } = req.body;
  if ( !regex.test(email) ) return res.status(400).json({ message: 'Invalid data!'}); // 2
  next(); // 2
}

function validatePassword(req, res, next) {
  const regex = /^\d{4,8}$/ ;
  const { password } = req.body;
  if ( !regex.test(Number(password)) ) return res.status(400).json({ message: 'Invalid data!'}); // 2
  next(); // 2
}

app.post('/user/register', validateUsername, validateEmail, validatePassword, (req, res) => {
  res.status(201).json({ "message": "user created" });
});

function validateBoth(req, res, next) {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const { email } = req.body;

  const regexPassword = /^\d{4,8}$/ ;
  const { password } = req.body;

  if (!regexEmail.test(email) || !regexPassword.test(Number(password))) {
    return res.status(400).json({ message: 'email or password is incorrect'}); // 3
  }
  next(); // 2
}

app.post('/user/login', validateBoth, (req, res) => {
  const token = generator.generate({
    length: 12,
    numbers: true
  });

  res.status(200).json({ token });
});

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });