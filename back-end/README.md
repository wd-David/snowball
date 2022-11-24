# back-end

## Prerequisite (containerization)

Create `.env.prod` under the back-end folder and remember to update the `DATABASE_URL` from `@localhost:5432` to `@postgres:5432`.

## CLI

- `pnpm start`: command to run in production

- `pnpm start:docker`: start the dockerized Express app with Postgres

## Fly.io

- [Swagger UI link](https://snowball.fly.dev/api/)

TBD

## About Snowball

- An expense tracker RESTful API

- This is the first version including basic features:

  - User can register an account with his/her email, and the email must not be the same as others' email.

  - User can login with his/her email. As the user successfully login, the server would return a set of JWT with 7 expiry days.

- User can get all categories and their subcategories.

- User can do basic CRUD to manipulate records.


## Tech Stack

- Built with framework `Express`

- Using DBMS `PostgreSQL`, ORM `Prisma` and `SQL`

- Referred to RESTful API principles

- API UI is built with Swagger

- Use git flow, codes should be reviewed and approved before being merged

## APIs
### User

1. User register route: `POST /users/register`

- **Request Body**
   ```json
  {
    "email": "string",
    "password": "string"
  }
   ```

- **Responses**
  - Success
    ```json
    {
      "code": 201
    }
    ```

  - Errors
    ```json
    {
      "code": 400,
      "type": "Register failed",
      "errors": [
        {
          "title": "Require email or password",
          "field_errors": {
            "email": "required",
            "password": "required"
          }
        },
        {
          "title": "Incorrect data type",
          "field_errors": {
            "email": "string",
            "password": "string"
          }
        },
        {
          "title": "Email is used",
          "field_errors": {
            "email": "used"
          }
        }
      ]
    }
    ```

2. User login route: `POST /users/logIn`

- **Request Body**
   ```json
  {
    "email": "string",
    "password": "string"
  }
   ```

- **Responses**
  - Success
    ```json
    {
      "code": 200,
      "token": "TOKEN"
    }
    ```

  - Errors
    ```json
    {
      "code": 400,
      "type": "Login failed",
      "errors": [
        {
          "title": "Require email or password",
          "field_errors": {
            "email": "required",
            "password": "required"
          }
        },
        {
          "title": "Incorrect data type",
          "field_errors": {
            "email": "string",
            "password": "string"
          }
        },
        {
          "title": "Incorrect email or password",
          "field_errors": {
            "email": "incorrect",
            "password": "incorrect"
          }
        }
      ]
    }
    ```

### Category

1. Get all categories route: `GET /categories`

- **Responses**
  - Success
    ```json
    {
      "code": 200,
      "categories": [
        {
          "id": "number",
          "mainCategory": "string",
          "subCategory": "string"
        },
        ......
      ]
    }
    ```

### Record

1. Create a new record route: `POST /reocrds`

- **Request Body**
  ```json
  {
    "title": "string",
    "amount": "number",
    "note": "string",
    "userId": "number",
    "categoryId": "number"
  }
  ```

- **Responses**
  - Success
    ```json
    {
      "code": 201
    }
    ```

  - Errors
    ```json
    {
      "code": 400,
      "type": "Post record failed",
      "errors": [
        {
          "title": "Require reocrd title, amount or categoryId",
          "field_errors": {
            "record": "required",
            "amount": "required",
            "categoryId": "required"
          }
        },
        {
          "title": "Incorrect data type",
          "field_errors": {
            "title": "string",
            "amount": "number",
            "categoryId": "number"
          }
        }
      ]
    }
    ```

2. Update the specific record route: `PUT /records/{:rid}`

- **Parameters**
  ```json
  {
    "rid": "number"
  }
  ```

- **Request Body**
  ```json
  {
    "title": "string",
    "amount": "number",
    "note": "string",
    "userId": "number",
    "categoryId": "number"
  }
  ```

- **Responses**
  - Success
    ```json
    {
      "code": 204
    }
    ```

  - Errors
    ```json
    {
      "code": 400,
      "type": "Put record failed",
      "errors": [
        {
          "tile": "Require reocrd id",
          "field_errors": {
            "recordId": "required"
          }
        },
        {
          "title": "Require reocrd id, title, amount or categoryId",
          "field_errors": {
            "recordId": "required",
            "title": "required",
            "amount": "required",
            "categoryId": "required"
          }
        },
        {
          "title": "Incorrect data type",
          "field_errors": {
            "recordId": "number",
            "title": "string",
            "amount": "number",
            "categoryId": "number"
          }
        },
        {
          "title": "Record not exist",
          "field_errors": {
            "record": "not exist"
          }
        },
        {
          "title": "Invalid user",
          "field_errors": {
            "userId": "not theRecord.userId"
          }
        }
      ]
    }
    ```

3. Delete the specific record route: `DELETE /records/{:rid}`

- **Parameters**
  ```json
  {
    "rid": "number"
  }
  ```

- **Responses**
  - Success
    ```json
    {
      "code": 204
    }
    ```

  - Errors
    ```json
    {
      "code": 400,
      "type": "Delete record failed",
      "errors": [
        {
          "title": "Require reocrd id",
          "field_errors": {
            "recordId": "required"
          }
        },
        {
          "title": "Incorrect data type",
          "field_errors": {
            "recordId": "number"
          }
        },
        {
          "title": "Record not exist",
          "field_errors": {
            "record": "not exist"
          }
        },
        {
          "title": "Invalid user",
          "field_errors": {
            "userId": "not theRecord.userId"
          }
        }
      ]
    }
    ```

4. Get the current user's income records route: `GET /records/income`

- **Responses**
  - Success
    ```json
    {
      "code": 200,
      "income records": [
        {
          "id": "number",
          "title": "string",
          "amount": "number",
          "note": "string",
          "userId": "number",
          "categoryId": "number"
        },
        ......
      ]
    }
    ```

5. Get the current user's expense records route: `GET /records/expense`

- **Responses**
  - Success
    ```json
    {
      "code": 200,
      "expense records": [
        {
          "id": "number",
          "title": "string",
          "amount": "number",
          "note": "string",
          "userId": "number",
          "categoryId": "number"
        },
        ......
      ]
    }
    ```

6. Get the current user's saving records route: `GET /records/saving`

  - **Responses**
    - Success
      ```json
      {
        "code": 200,
        "saving records": [
          {
            "id": "number",
            "title": "string",
            "amount": "number",
            "note": "string",
            "userId": "number",
            "categoryId": "number"
          },
          ......
        ]
      }
      ```
