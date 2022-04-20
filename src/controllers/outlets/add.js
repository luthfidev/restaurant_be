const model = require('../../models')


exports.post = async function (req, res, next) {
    const t = await model.sequelize.transaction();
    try {
        const { name } = req.body
        
        const {user_id} = req.jwtPayload

        if (!name && !user_id) {
            return res.answerWith(400, 'Data required')
        }
        const queryUsersId = `SELECT id FROM users WHERE id = '${user_id}'`;
        const dataQueryUsersId = await model.sequelize.query(queryUsersId, {
            type: model.sequelize.QueryTypes.SELECT, transaction: t
        });
        const queryOutletName = `SELECT name FROM outlets WHERE name LIKE '%${name}'`;
        const dataQueryOutletName = await model.sequelize.query(queryOutletName, {
            type: model.sequelize.QueryTypes.SELECT, transaction: t
        });

        if (dataQueryOutletName.length > 0) {
            await t.commit();    
            
            if (dataQueryUsersId[0].deletedAt) {
                return res.answerWith(400, 'User Is Not Found')
            }
            return res.answerWith(400, 'Outlet Name is Exist')
        }
        const createUsers = await model.outlets.create({
            name: name,
            user_id: user_id,
        }, {
            transaction: t
        })
        await t.commit();
        res.answerWith(200, 'Outlets Created')
    } catch (error) {
        await t.rollback()
        next(error)
    }
}