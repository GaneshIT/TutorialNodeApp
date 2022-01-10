const sql = require('mssql/msnodesqlv8')
const config = {
  driver: 'msnodesqlv8',
  connectionString: 'Driver=SQL Server Native Client 11.0;Server=W10JQQGN13;Database=MytutorialDb;Trusted_Connection=yes;',
} 
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}