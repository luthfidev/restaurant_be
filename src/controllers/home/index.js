const { pagination } = require("../../utils");
const model = require("../../models");

exports.get = async function (req, res, next) {
  try {
    // take user id from payload
    const userIdPayload = req.jwtPayload.user_id;
    const {
      page,
      limit,
      id = parseInt(userIdPayload),
    } = req.query;


    let queryId = `WHERE u.id = NULL`;

    if (id) {
      queryId = `WHERE u.id = ${id}`;
    }

    const queryCount = `SELECT
                                COUNT (o.id) AS Total
                            FROM outlets o
                            LEFT JOIN users u ON u.id = o.user_id 
                            ${queryId}`;

    const countQuery = await model.sequelize.query(queryCount, {
      type: model.sequelize.QueryTypes.SELECT,
    });

    let paginationUtils = pagination(page, limit, countQuery[0].total);

    const queryListOutlets = `SELECT
                                u.id as user_id,
                                u.username as username,
                                u.access_level_id,
                                a.name as access_level,
                                o.name as outlet_name,
                                o.created_at
                            FROM
                                users u
                            INNER JOIN outlets o 
                                ON o.user_id = u.id
                            INNER JOIN access_level a 
                                ON a.id = u.access_level_id
                                    ${queryId}
                                LIMIT ${paginationUtils.limit} OFFSET ${paginationUtils.offset}`;
    const dataQueryListOutlets = await model.sequelize.query(queryListOutlets, {
      type: model.sequelize.QueryTypes.SELECT,
    });

    res.data = {
      data: dataQueryListOutlets,
      pageInfo: paginationUtils,
    };
    res.answerWith(200, "List Outlets");
  } catch (error) {
    next(error);
  }
};
