module.exports = function pagination(page, limit, total) {
    const pageInt = parseInt(page ? parseInt(page) : 1);
    const limitInt = parseInt(limit ? limit : total);
    const offset = (limitInt * (pageInt + 1)) - limitInt == limitInt ? (limitInt * (pageInt)) - limitInt : (limitInt * (pageInt + 1)) - limitInt
    const totalPage = Math.ceil(total / limitInt) - 1
    return {
        page: pageInt,
        limit: limitInt,
        offset,
        totalPage: totalPage > 0 ? totalPage : 1,
        totalData: total
    }
}