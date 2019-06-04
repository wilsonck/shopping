"use strict"

//Const Pagination
const defaultPageSize = 6;
const defaultPage = 1;
const noPagination = -1;


function Pagination(dataToPaginate, pageActual = defaultPage, pageSize = defaultPageSize) {
    const startData = (pageActual -1) * pageSize;
    const finalData = pageActual * pageSize;
    return dataToPaginate.slice(startData, finalData);
}

function validYear(year = 1950) {
    return year >= 1950 && year <= 2500;
}

module.exports = {
    Pagination,
    noPagination
};