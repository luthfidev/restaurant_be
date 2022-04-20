# Show List Outlet

Show all outlet with token required

**URL** : `/admin`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES (admin only)

**Data constraints** : `{}`

## Success Responses

**Condition** : Admin can see list outlet.

**Code** : `200 OK`


```json

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
        },
        {
            "user_id": "16",
            "username": "user2",
            "access_level_id": 2,
            "access_level": "user",
            "outlet_name": "Chicken Food 2",
            "created_at": "21:12:42.964+07"
        },
        {
            "user_id": "16",
            "username": "user2",
            "access_level_id": 2,
            "access_level": "user",
            "outlet_name": "Chicken Food",
            "created_at": "21:12:36.18+07"
        }
    ],
    "pageInfo": {
        "page": 1,
        "limit": 3,
        "offset": 0,
        "totalPage": 1,
        "totalData": "3"
    },
    "meta": {
        "startAt": "2022-04-20T21:13:34.530+07:00",
        "finishedAt": "2022-04-20T21:13:34.545+07:00",
        "duration": "15ms",
        "requestId": "6a342eba-8017-4f30-a38d-1f9e4bba91ad",
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
        "startAt": "2022-04-20T21:14:11.603+07:00",
        "finishedAt": "2022-04-20T21:14:11.605+07:00",
        "duration": "2ms",
        "requestId": "3bacdbe7-3ba2-4b6b-82d5-338d0df12112",
        "ipAddress": "::1"
    }
}
```