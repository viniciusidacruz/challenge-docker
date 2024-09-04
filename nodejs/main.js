const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "peopledb",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  const name = `Person ${Math.floor(Math.random() * 1000)}`;
  connection.query(`INSERT INTO people(name) VALUES('${name}')`, (err) => {
    if (err) {
      console.error("Error inserting into MySQL:", err);
      return res.sendStatus(500);
    }

    connection.query("SELECT name FROM people", (err, results) => {
      if (err) {
        console.error("Error querying MySQL:", err);
        return res.sendStatus(500);
      }

      let response = "<h1>Full Cycle Rocks!</h1>";
      response += "<ul>";
      results.forEach((row) => {
        response += `<li>${row.name}</li>`;
      });
      response += "</ul>";
      res.send(response);
    });
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
