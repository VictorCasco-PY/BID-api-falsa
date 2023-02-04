const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
  constructor() {
    this.id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.random.number();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

app.get("/api/users/new", (req, res) => {
  let newUser = new User();
  res.json({ data: newUser });
});

app.get("/api/companies/new", (req, res) => {
  let company = new Company();
  res.json({ results: company });
});

app.get("/api/user/company", (req, res) => {
  let newUser = new User();
  let newCompany = new Company();
  res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
