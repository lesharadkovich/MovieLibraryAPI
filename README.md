# Backend for Movie Library Android app

It was developed with nodejs + typescript and PostgreSQL as a DBMS

## APIs

### GET /library
Returns entire library (all movies in database)

### POST /library
Creates new movie in a library

Headers:
Content-type: 'application/form-data'

Body: 
{
name: string, director: string, description: string, imageurl: base64-image }


### GET /movie/:id
Returns movie with a specific ID

### POST /movie/:id
Saves edited movie data

### DELETE /movie/:id
Deletes movie with a specific id
