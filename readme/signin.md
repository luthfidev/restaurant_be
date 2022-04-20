# Login

used to enter the application

**URL** : `/auth/login`

**Method** : `POST`

**Auth required** : YES

**Data constraints**

```json
{
    "username": "[password in plain text]",
}
```

**Data example**

```json
{
    "username": "user",
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "status": "200",
    "success": true,
    "message": "User Login",
    "data": {
        "payload": {
            "user_id": "14",
            "username": "user",
            "access_level_id": 2,
            "isAdmin": null,
            "priviledges": []
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTQiLCJ1c2VybmFtZSI6InVzZXIiLCJhY2Nlc3NfbGV2ZWxfaWQiOjIsImlzQWRtaW4iOm51bGwsInByaXZpbGVkZ2VzIjpbXSwiaWF0IjoxNjUwNDYwODMyfQ.qFqSEFHg003pvGNto8uhATtSwiH8XkZjwWJer2wJwZI",
    "meta": {
        "startAt": "2022-04-20T20:20:32.052+07:00",
        "finishedAt": "2022-04-20T20:20:32.088+07:00",
        "duration": "36ms",
        "requestId": "5daa4713-dfd0-44a1-bf7b-82ee652069f7",
        "ipAddress": "::1"
    }
}
```

## Error Response

**Condition** : If 'username' not found.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": "401",
    "success": false,
    "message": "Not Authorized",
    "meta": {
        "startAt": "2022-04-20T20:21:20.816+07:00",
        "finishedAt": "2022-04-20T20:21:20.865+07:00",
        "duration": "49ms",
        "requestId": "ed0c73f1-0a59-4dc6-bf14-423dde193f03",
        "ipAddress": "::1"
    }
}
```