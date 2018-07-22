# BigPanda

```console
 ______  _          ______                _       
(____  \(_)        (_____ \              | |      
 ____)  )_  ____    _____) )___ ____   _ | | ____ 
|  __  (| |/ _  |  |  ____/ _  |  _ \ / || |/ _  |
| |__)  ) ( ( | |  | |   ( ( | | | | ( (_| ( ( | |
|______/|_|\_|| |  |_|    \_||_|_| |_|\____|\_||_|
          (_____|                                 

```

"BigPanda Comments Service" lets you post and view visitors' messages/comments.

## Posting a new message



**REQUEST**

```console
[POST] http://message-service.bigpanda.com/message
```

**BODY**

A JSON containing the following parameters:

| Parameter  			| Type | Description | Required? |
| ------------- 		| ---	| ------------- | ------------- |
| email  				|	String	| The visitor's email  | No |
| comment  				|	String	| The visitor's comment  | No |

for example:

```javascript
{
  "email": "tomgazit@gmail.com",
  "comment": "This is the comment, yay !"
}
```


**VALID RESPONSE** (status code: 200)

```console
{
	success: true,
	id: {COMMENT_ID}
}
```


**BAD RESPONSE** (status code: 500)

```console
{
	success: false,
	error: {
		message: 'HUMAN READABLE ERROR'
	}
}
```

## Get all messages



**REQUEST**

```console
[GET] http://message-service.bigpanda.com/message
```

**BODY**

NO BODY REQUIRED

**VALID RESPONSE** (status code: 200)

```console
[
	{
		email: "tomgazit@gmail.com",
		comment: "this is my comment",
		msgDate: "2018-22-07T13:20:15"
	},
	{
		email: "tomgazit1@gmail.com",
		comment: "this is my comment",
		msgDate: "2018-22-07T12:20:15"
	},
	{
		email: "tomgazit@gmail.com",
		comment: "this is another comment",
		msgDate: "2018-22-07T11:20:15"
	}...
]
```


**BAD RESPONSE** (status code: 500)

```console
{
	success: false,
	error: {
		message: 'HUMAN READABLE ERROR'
	}
}
```

## Get last message by email

**REQUEST**

```console
[GET] http://message-service.bigpanda.com/message/byEmail/{EMAIL}
```

**BODY**

NO BODY IS REQUIRED

**VALID RESPONSE** (status code: 200)

```console
{
	email: "tomgazit@gmail.com",
	comment: "this is my comment",
	msgDate: "2018-22-07T13:20:15"
}
```


**BAD RESPONSE** (status code: 500 or 404)

```console
{
	success: false,
	error: {
		message: 'HUMAN READABLE ERROR'
	}
}
```

## Issues

Probably some ¯\\\_(ツ)_/¯ 

## TO DO

1. Nothing yet