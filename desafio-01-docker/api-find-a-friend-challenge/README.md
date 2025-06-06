<p align="center">
  <img src="img.shields.io/badge/node_logo.svg" width="200" alt="Node Logo" /></a>
</p>

<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
    <img src="img.shields.io/badge/nodejs.svg?style=flat&logo=nodejs&logoColor=white" alt="Node">
		<img src="img.shields.io/badge/fastify.svg?style=flat&logo=fastify&logoColor=white" alt="Fastify">
	  <img src="img.shields.io/badge/prisma.svg?style=flat&logo=prisma&logoColor=white" alt="Prisma">
    <img src="img.shields.io/badge/zod.svg?style=flat&logo=zod&logoColor=white" alt="Zod">
    <img src="img.shields.io/badge/vitest.svg?style=flat&logo=vitest&logoColor=white" alt="Vitest">
</p>

## 📍 Overview

This API aims to serve applications with the objective of registering NGOs and PETs so that they can be adopted.

The application has the following rules.

### 🔌 Application rules

- [x] It should be possible to register as an ORG
- [x] It should be possible to log in as an ORG
- [x] It should be possible to register a pet
- [x] It should be possible to list all pets available for adoption in a city
- [x] It should be possible to filter pets by their characteristics
- [x] It should be possible to view details of a pet for adoption

### 📦 Business rules

- [x] To list pets, we must inform the city
- [x] An ORG must have an address and a WhatsApp number
- [x] A pet must be linked to an ORG
- [x] The user who wants to adopt will contact the ORG via WhatsApp
- [x] All filters, besides the city, are optional
- [x] For an ORG to access the application as an admin, it must be logged in

---

## 🗂️ Repository Structure

```sh
└── find-a-friend
    ├── .img.shields.io
    ├── prisma
        └── migrations
        └── vitest-environment-prisma
    ├── src
      └── @types
      └── env
      └── http
      └── lib
      └── repositories
      └── tests
      └── use-cases
      └── utils
    ├── app
    ├── server
    ├── .env.example
    ├── .eslintignore
    ├── .eslintrc.json
    ├── docker-compose.yml
    ├── LICENSE
```
---

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the repository:
>
> ```console
> $ git clone https://github.com/diego64/api-find-a-friend
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd api-find-a-friend
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```
> 4. Install the database:
> ```console
> $ docker compose up -d
> ```
> 5. Generate the migrantios:
> ```console
> $ npx prisma migrate dev
> ```
> 6. Start the application:
> ```console
> $ npm run start:dev
> ```

### 🧪 Tests

> Run the functional tests using the command below:
> ```console
> $ npm run test
> ```
> Run E2E tests using the command below:
> ```console
> $ npm run test:e2e
> ```

---

## 📄 License

This project is protected by the MIT License.


 ## 💻 Reference

 This project is part of the Node.Js specialization program of the company Rockeseat through the Ignite program, which has undergone a content update since 2022 to the current moment.

This challenge aims to test the SOLID knowledge learned in the third chapter of the program. Since this project aimed at developing tests, there was no criterion for the organization and structure of the code, but rather the length of the proposed requirements and the development of unit and E2E tests.