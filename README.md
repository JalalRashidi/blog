
# Project Title

Simple blog Application with for were user can read, create and search blogs.


## Getting started
to clone and run this project guide

- `git clone https://github.com/JalalRashidi/blog.git`
- `cd blog`
-  `npm install`
- `npm run dev`
- `open your browser and enter http://localhost:3000/ `

## Deployment

this project is not create for production

```bash
  this project is in development phase
```


## API Reference

#### Get all blog

```http
  methode : get http://localhost:3000/api/blog
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `number` |  if you want to get limited number of blog put limit

#### Get a single blog

```http
  methode : get  http://localhost:3000/api/blog/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of blog you want fetch |

#### post a  blog

```http
  methode : post http://localhost:3000/api/blog
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `String` | **Required**. title of the blog you want to create |
| `content`      | `String` | **Required**. content of the blog you want to create |
| `summary`      | `String` | **Required**. summary of the blog you want to create |

#### Delete a single blog

```http
 methode : DELETE http://localhost:3000/api/blog
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` |  put the blog id in body
## FAQ

#### tech stack

this project is created using Next js and sqlite.


