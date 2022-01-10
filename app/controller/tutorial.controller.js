const { sql,poolPromise } = require('../config/db.config')
const fs = require('fs');
//var rawdata ={} //fs.readFileSync('../query/queries.json');
//var queries = JSON.parse(rawdata);

class MainController {

    async getAllData(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query("SELECT * FROM Tutorial")
          res.json(result.recordset)
      } catch (error) {
        debugger;
        res.status(500)
        res.send(error.message)
      }
    }
    async addNewData(req , res){
      try {
        if(req.body.TutorialId != null && req.body.Title != null && req.body.TutorialDesc != null && req.body.Published!=null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('TutorialId',sql.Int , req.body.TutorialId)
          .input('Title',sql.VarChar , req.body.Title)
          .input('TutorialDesc',sql.VarChar,req.body.TutorialDesc)
          .input('Published',sql.Char,req.body.Published)
          .query("INSERT INTO [dbo].[tutorial] (TutorialId,Title,TutorialDesc,Published) VALUES (@TutorialId,@Title,@TutorialDesc,@Published)")
          res.json(result)
        } else {
          res.send('Please fill all the details!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    }
    async updateData(req , res){
      try {
        if(req.body.TutorialId != null && req.body.Title != null && req.body.TutorialDesc != null && req.body.Published!=null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('TutorialId',sql.Int , req.body.TutorialId)
          .input('Title',sql.VarChar , req.body.Title)
          .input('TutorialDesc',sql.VarChar,req.body.TutorialDesc)
          .input('Published',sql.Char,req.body.Published)
          .query("INSERT INTO [dbo].[tutorial] (TutorialId,Title,TutorialDesc,Published) VALUES (@TutorialId,@Title,@TutorialDesc,@Published)")
          res.json(result)
        } else {
          res.send('Please fill all the details!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    }
    async deleteData(req , res){
      try {
        if(req.body.TutorialId != null ) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('TutorialId',sql.Int,req.body.TutorialId)
            .query("delete from Tutorial where TutorialId=@TutorialId")
            res.json(result)
          } else {
            res.send('Please fill all the details!')
          }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
}

const controller = new MainController()
module.exports = controller;