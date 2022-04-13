var pool = require('./bd');

async function getNovedades()
    {
            var query = 'select * from novedades oder by id desc';
            var rows = await pool.query(query);
            return rows;
        
    }

    module.exports = {getNovedades}