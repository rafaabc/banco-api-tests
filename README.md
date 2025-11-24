# Banco API Tests

## Overview
Banco API Tests is an automated test project for validating the REST API available at:  
[banco-api](https://github.com/juliodelimas/banco-api)

This project uses JavaScript with Mocha, Supertest, Chai, and other libraries to structure and execute functional API tests. It also supports environment configuration through a `.env` file and generates HTML reports using Mochawesome.

---

## 🎯 Objective
The purpose of this project is to provide an automated test suite to contribute to providing fast feedback on the Banco REST API, validating endpoints, responses, and business logic.

---

## 🛠️ Tech Stack
- **JavaScript (Node.js)**
- **Mocha** – Test structure  
  Documentation: https://mochajs.org/
- **Supertest** – Test runner  
  Documentation: https://github.com/ladjs/supertest
- **Chai** – Assertions  
  Documentation: https://www.chaijs.com/
- **Dotenv** – Environment variable management  
  Documentation: https://github.com/motdotla/dotenv
- **Mochawesome** – HTML report generator  
  Documentation: https://github.com/adamgruber/mochawesome

All dependencies are listed in the `package.json` file.

---

## 📁 Project Structure

```
banco-api-tests/
│
├── fixtures/                # Directory containing fixture files
│   └── *.postLogin.json               # Fixture file
│   └── *.postTransferencias.json      # Fixture file
│
├── helpers/                # Directory containing helper files
│   └── *.autenticacao.js              # Helper file
│
├── test/                # Directory containing test scripts
│   └── *.login.test.js                # Test files
│   └── *.transferencia.test.js        # Test files
│
├── mochawesome-report/  # Automatically generated HTML reports
│
├── .env                 # User-created file containing environment variables (not versioned)
│
├── .gitignore
├── package.json         # Project dependencies and scripts
├── package-lock.json
└── README.md
```

---

## ⚙️ Environment Configuration

You must create a `.env` file in the root directory.  

### Required variables:

```
BASE_URL=http://localhost:3000
```

---

## ▶️ Running the Tests

### Install dependencies

```
npm install
```

### Run tests and generate Mochawesome report

```
npm test
```

After execution, the HTML report will be available at:

```
./mochawesome-report/mochawesome.html
```

---

## 📊 Reports

This project uses **Mochawesome** to generate a detailed HTML report containing:
- Passed tests  
- Failed tests  
- Test duration  
- Execution metadata  

Open the file using any web browser.

---

## 📎 Useful Links

Documentation for all main dependencies used:

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/ladjs/supertest
- Dotenv: https://github.com/motdotla/dotenv
- Mochawesome: https://github.com/adamgruber/mochawesome

---

## 📌 Notes
- Make sure to configure your `.env` file before running the tests.
- The API under test can be found at:  
  [banco-api](https://github.com/juliodelimas/banco-api)

---

Happy testing! 🚀
