const { query } = require('express');
const mysql2 = require('mysql2/promise');

exports.executeQuery = async (query)=>{
    const connection = await mysql2.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'bookmanagement'
      });

      try{
        const [books] = await connection.execute(query);
        return books;
    }
    catch(e){
        console.error(e);
    }
    finally{
        connection.destroy();
    }
}