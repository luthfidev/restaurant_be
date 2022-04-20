const { pagination, csv } = require("../../utils");
const model = require("../../models");

exports.get = async function (req, res, next) {
  try {
    const {
      page,
      limit,
      id,
      name,
      outletId,
      outletName,
      search,
    } = req.query;

    let queryId = "";
    let queryName = "";
    let queryOutletId = "";
    let queryOutletName = "";
    let querySearch = "";

    if (id) {
      queryId = ` AND u.id = ${id}`;
    }
    if (name) {
      queryName = ` AND u.name LIKE '%${name}%' `;
    }
    if (outletId) {
      queryOutletId = ` AND o.id as outlet_id LIKE '%${outletId}%' `;
    }
    if (outletName) {
      queryOutletName = ` AND o.name as outlet_name = '${outletName}'`;
    }
    if (search) {
      querySearch = `AND (u.name LIKE '%${search}%' OR o.name LIKE '%${search}%')`;
    }

    const queryCount = `SELECT
                                COUNT (o.id) AS Total
                            FROM outlets o
                            LEFT JOIN users u ON u.id = o.user_id 
                            WHERE u.id != 0
                                ${queryId}
                                ${queryName}
                                ${querySearch}`;

    const countQuery = await model.sequelize.query(queryCount, {
      type: model.sequelize.QueryTypes.SELECT,
    });

    let paginationUtils = pagination(page, limit, countQuery[0].total);

    const queryListOutlets = `SELECT
                                u.id as user_id,
                                u.name as user_name,
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
                            WHERE u.id != 0
                                    ${queryId}
                                    ${queryName}             
                                    ${querySearch}
                                ORDER BY u.id ASC
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
