# API Restaurant 


***

## Dependencies

* Node Js
* Express Js
* cors
* jasonwebtoken(JWT)
* body-parser
* dotenv
* express-auto-routes
* express-bearer-token
* helmet
* morgan-body
* pg
* pg-hstore
* sequelize
* pm2
  
***

## Installing

Clone the repo, install dependencies, and start the API server locally.

```shell
git clone https://github.com/luthfidev/restaurant_be.git
cd muhiLibrary_backend
mv .envDefault .env
vim .env
pm2 start ecosystem.config.js 
```
***

## Configuration

change .envDefault to .env, and you can modified according to your specifications.

APP_PORT = 3100<br>
APP_URL = http://localhost:3100<br>
<br>
DB_HOST = localhost<br>
DB_USER = 'must be filled'<br>
DB_PASS = 'must be filled'<br>
DB_NAME = restaurant_app<br>
DB_PORT = 5432<br>
<br>
TOKEN_SECRET = 'must be filled'<br>
TOKEN_ALGORITMA = HS256<br>


## API End Point
### Auth
* [Auth For Signin](readme/signin.md) : `POST /auth/signin`
* [Auth For Signup](readme/signup.md) : `POST /auth/signup`

### Home
* [Show List Outlet User](readme/users/get.md) : `GET /users`
* [Created Outlet](readme/users/post.md) : `POST /users`

### Admin
* [Show List All Outlet](readme/books/get.md) : `GET /books`
