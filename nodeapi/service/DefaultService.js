'use strict';
var config=require('../dbconfig');
const sql=require('mssql');
const axios = require('axios').default;

/**
 *
 * purpose String Indicate the purpose (optional)
 * returns List
 **/
exports.categoriesGET = function(purpose) {
  return new Promise(async function(resolve, reject) {
  try {
    let pool=await sql.connect(config);
    let categories=await pool.request().query("select Id,Name from Category");
    resolve(categories.recordset);
  } catch (error) {
    console.log(error);
  }
  });
}



exports.axiosApi = async function() {
url='https://run.mocky.io/v3/9c7d2e50-3935-4db3-91ef-6c85f6d6f54b';
  const response = await axios.get(url)
  return response.data
}



/**
 *
 * categoryId Integer The categoryId for which products has to be returned (optional)
 * keyword String The search keryword for which products has to be returned when matched with title, name, tags or description (optional)
 * pagesize Integer No of products will be shown based on pagesize (optional)
 * startpage Integer The current page will be shown based on startpage (optional)
 * returns List
 **/
exports.productsGET = function(categoryId,keyword,pagesize,startpage) {
  return new Promise(async function(resolve, reject) {
    try {
      if(categoryId===undefined){
        categoryId=0;
      }
      if(keyword===undefined){
        keyword='';
      }
      let offset=parseInt((startpage*pagesize)-pagesize,10);
      let pool=await sql.connect(config);
      let products=await pool.request()
                    .input('categoryId', sql.Int, categoryId)
                    .input('keyword', sql.VarChar, keyword)
                    .query(`select * from Product where (CategoryId=@categoryId or @categoryId=0) and (@keyword='' or [Name] like '%'+@keyword+'%') 
                    ORDER BY (SELECT NULL)
                    OFFSET ${offset} ROWS FETCH NEXT ${pagesize} ROWS ONLY`);
      resolve(products.recordset);
    } catch (error) {
      console.log(error);
    }
    });
}

