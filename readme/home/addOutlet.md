# Add Outlet

Create outlet for user

**URL** : `/outlets/add`

**Method** : `POST`


**Data constraints**

```json
{
    "name": "[name in plain text]",
    "user_id": "[user id in interger]"
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
    "message": "Outlets Created",
    "meta": {
        "startAt": "2022-04-20T21:01:07.600+07:00",
        "finishedAt": "2022-04-20T21:01:07.628+07:00",
        "duration": "28ms",
        "requestId": "831e435d-2fed-4845-83f6-9412521792b4",
        "ipAddress": "::1"
    }
}
```

## Error Response

**Condition** : If 'outlet' is exist.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "status": "400",
    "success": false,
    "message": "Outlet Name is Exist",
    "meta": {
        "startAt": "2022-04-20T21:01:33.397+07:00",
        "finishedAt": "2022-04-20T21:01:33.448+07:00",
        "duration": "51ms",
        "requestId": "3587b697-93c8-4495-8ef5-199229c1c6dc",
        "ipAddress": "::1"
    }
}
```