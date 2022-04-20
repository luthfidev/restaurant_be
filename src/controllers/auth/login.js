const model = require('../../models')
const { security } = require('../../config')
const jwt = require('jsonwebtoken')
exports.post = async function (req, res, next) {
    try {
        const { username } = req.body
        if (!username) {
            return res.answerWith(400, 'Data Is Required')
        }
        const queryUsers = `SELECT
                                    u.id, 
                                    u.username,
                                    u.access_level_id,
                                    a.name AS acces_level_name,
                                    a.is_admin
                                FROM users u 
                                LEFT JOIN access_level a ON a.id = u.access_level_id
                                WHERE u.username = '${username}' AND u.deleted_at IS NULL`;
        const dataQueryUsers = await model.sequelize.query(queryUsers, {
            type: model.sequelize.QueryTypes.SELECT
        });
        if (dataQueryUsers.length > 0) {
           
            const queryUsersPriviledges = `SELECT 
                                        f.path
                                    FROM features f
                                    LEFT JOIN users_role_priviledges urp ON f.id = urp.features_id
                                    WHERE urp.access_level_id = ${dataQueryUsers[0].access_level_id}
                                    AND urp.allow = 1`;
            const dataQueryUsersPriviledges = await model.sequelize.query(queryUsersPriviledges, {
                type: model.sequelize.QueryTypes.SELECT
            })

            let priviledges = []
            for (let i = 0; i < dataQueryUsersPriviledges.length; i++) {
                priviledges.push(dataQueryUsersPriviledges[i].path)
            }

            // priviledges.push('/home','/outlets');

            const payload = {
                user_id: dataQueryUsers[0].id,
                username: dataQueryUsers[0].username,
                access_level_id: dataQueryUsers[0].access_level_id,
                access_level_name: dataQueryUsers[0].access_level_name,
                isAdmin: dataQueryUsers[0].is_admin,
                priviledges: priviledges
            }
            const token = jwt.sign(payload, security.JWT.key);
            res.data = {
                data: {
                    payload
                },
                token: token,
            };
            res.answerWith(200, 'User Login')
        } else {
            res.answerWith(401, 'Not Authorized')
        }
    } catch (error) {
        next(error)
    }
}