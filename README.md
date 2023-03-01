<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222210790-dacc1d0f-48dd-489b-ac2d-bfcd41dc373f.png" alt="BANNER" />
</p>

This NestJS CRUD API implements standard Create, Read, Update, and Delete operations for a MongoDB database, providing RESTful endpoints for data manipulation.

### Checkpoints
- [x] Use NestJS to create the API and MongoDB as the database.
- [x] The API should have endpoints for creating, reading, updating, and deleting users.
- [x] Users should have the following properties: id (unique identifier), name, email, and password.
- [x] Use NestJS validation to ensure that name, email, and password are provided and are in the correct format (name and email should be strings, and password should be at least 6 characters long).
- [x] Use the NestJS repository pattern to perform the database operations.
- [x] Use Mongoose to define the schema for the users collection.

### Endpoints

1. **POST /user** : To create a new user.
<h3>
    <p align="center">
        REQUEST
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222212213-de5292ef-00f9-41ff-809f-20e90e752c2a.png" />
</p>
<h3>
    <p align="center">
        RESPONSE
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222212979-d146bd69-25aa-48a2-88b8-38c7e16fcf68.png" />
</p>

2. **GET /user** : To fetch all users.
<h3>
    <p align="center">
        REQUEST
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222213400-ceaa394b-4181-40f3-8561-05ec33eea4a2.png" />
</p>
<h3>
    <p align="center">
        RESPONSE
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222213634-f20df300-25c2-4b2d-bf00-0f542bca481a.png" />
</p>

3. **PUT /user/:id** : To update the user with :id.
<h3>
    <p align="center">
        REQUEST
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222214330-e271c671-933e-4ecd-bed1-0c6aa94aa7e6.png" />
</p>
<h3>
    <p align="center">
        RESPONSE
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222214570-925c37a9-52ee-4fef-8e31-4d49558c8105.png" />
</p>

4. **GET /user/:id** : To get the user with :id.
<h3>
    <p align="center">
        REQUEST
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222215093-eeffa132-ba60-4111-9a15-ed29709f7ff8.png" />
</p>
<h3>
    <p align="center">
        RESPONSE
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222215231-61388b01-a73d-4783-83e3-c36c5afdb3fa.png" />
</p>

5. **DELETE /user/:id** : To delete the user with :id.
<h3>
    <p align="center">
        REQUEST
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222215761-86074b83-b361-4a20-b0ea-790d8aac672a.png" />
</p>
<h3>
    <p align="center">
        RESPONSE
    </p>
</h3>
<p align="center">
    <img src="https://user-images.githubusercontent.com/77505989/222215881-9c66ea99-6b47-476d-8f08-36b7f62df04a.png" />
</p>

### Installation
- Fork the repository.
- Clone the repository.
```
git clone https://github.com/<username>/NESTJS-CRUD
```
- Open it in your code editor.
- open the terminal in **root folder** and run,
```
npm install
```
- Run the server.
```
npm run start
```




