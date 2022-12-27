import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:'root',
  password: "mysql@123",
  database:"blog"
})
db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + db.threadId);
});