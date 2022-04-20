# Show List Outlet for user

Show Outlet User with token required

**URL** : `/home`

**Method** : `GET`

**Auth required** : YES

**Data constraints** : `{}`

## Success Responses

**Condition** : User can see outlet.

**Code** : `200 OK`


```json
{
    "status": "200",
    "success": true,
    "message": "List Outlets",
    "data": [
        {
            "user_id": "14",
            "username": "user",
            "access_level_id": 2,
            "access_level": "user",
            "outlet_name": "Resto Seafod",
            "created_at": "21:01:07.619+07"
        }
    ],
    "pageInfo": {
        "page": 1,
        "limit": 1,
        "offset": 0,
        "totalPage": 1,
        "totalData": "1"
    },
    "meta": {
        "startAt": "2022-04-20T21:05:18.146+07:00",
        "finishedAt": "2022-04-20T21:05:18.190+07:00",
        "duration": "44ms",
        "requestId": "05b6942d-d691-405a-9448-03f807f148d9",
        "ipAddress": "::1"
    }
}
```
## Error Responses

**Condition** : if not have token.

**Code** : `401 BAD REQUEST`


```json
{
    "status": "401",
    "success": false,
    "message": "Not Authorized",
    "meta": {
        "startAt": "2022-04-20T21:06:00.829+07:00",
        "finishedAt": "2022-04-20T21:06:00.831+07:00",
        "duration": "2ms",
        "requestId": "4d09042f-7730-441c-926f-aef515395030",
        "ipAddress": "::1"
    }
}
```