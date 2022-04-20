# Register

Used to register authentication

**URL** : `/auth/register`

**Method** : `POST`


**Data constraints**

```json
{
    "username": "[username in plain text]",
    "access_level_id": "[access level in interger]"
}
```

**Data example**

```json
{
    "username": "user",
    "access_level_id": 2
}
```

## Success Response

**Code** : `201 CREATED`

**Content example**

```json
{
    "status": "200",
    "success": true,
    "message": "Users Created",
    "meta": {
        "startAt": "2022-04-20T20:19:11.898+07:00",
        "finishedAt": "2022-04-20T20:19:11.915+07:00",
        "duration": "17ms",
        "requestId": "4cd1e3cd-cf7b-46d7-9c0e-335452601526",
        "ipAddress": "::1"
    }
}
```

## Error Response

**Condition** : If 'username' is exist.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": "400",
    "success": false,
    "message": "Name is Exist",
    "meta": {
        "startAt": "2022-04-20T20:45:04.950+07:00",
        "finishedAt": "2022-04-20T20:45:04.993+07:00",
        "duration": "43ms",
        "requestId": "de614c7b-244d-463c-a019-09a74e1c463e",
        "ipAddress": "::1"
    }
}
```