const model = require('../../models')

exports.post = async function (req, res, next) {
    const t = await model.sequelize.transaction();
    try {
        const { username, access_level_id } = req.body

        if (!username && !access_level_id) {
            return res.answerWith(400, 'Data required')
        }
        const queryUsername = `SELECT username FROM users WHERE username = '${username}'`;
        const dataQueryUsername = await model.sequelize.query(queryUsername, {
            type: model.sequelize.QueryTypes.SELECT, transaction: t
        });
        if (dataQueryUsername.length > 0) {
            await t.commit();
            if (dataQueryUsername[0].deletedAt) {
                return res.answerWith(400, 'User Is Not Active')
            }
            return res.answerWith(400, 'Name is Exist')
        }
        const createUsers = await model.users.create({
            username: username,
            access_level_id: parseInt(access_level_id),
        }, {
            transaction: t
        })
        await t.commit();
        res.answerWith(200, 'Users Created')
    } catch (error) {
        await t.rollback()
        next(error)
    }
}