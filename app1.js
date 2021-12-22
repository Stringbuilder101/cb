const { query } = require("express");
const express = require("express");
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Data600@@",
  port: "3000",
});

conn.connect(function (err) {
  if (err) {
    console.log("Error connecting to MySQL:", err);
  } else {
    console.log("Connection established");
  }
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.set("view-engine", "ejs");
//signup
app.get("/signup.html", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
  console.log("I am in middleware");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("I am in middleware");
});

//homepage student
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("I am in middleware");
});

app.get("/admlogin.html", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
  console.log("I am in middleware");
});

app.post("/login", function (req, res) {
  const username = req.body.email;
  const password = req.body.psw;
  console.log("username");
  console.log(username);
  console.log("password");
  console.log(password);

  const sql = `select * from myapp.users WHERE username = '${username}' AND password = '${password}' AND type = 'S'`;

  conn.query(sql, (err, result) => {
    if (result.length === 0) {
      console.log("Your info is incorrect! Try again");
      res.sendFile(__dirname + "/index.html");
    } else {
      res.sendFile(__dirname + "/stviewreqenrol.html");
    }
    console.log("result");
    console.log(result);
  });
});

app.post("/signup", function (req, res) {
  const username = req.body.email;
  const password = req.body.psw;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  let type = null;

  const str2 = password;
  if (str2.endsWith("1")) {
    type = "I";
  } else if (str2.endsWith("2")) {
    type = "A";
  } else if (str2.endsWith("@")) {
    type = "S";
  }

  console.log("username");
  console.log(username);
  console.log("password");
  console.log(password);
  console.log("firstname");
  console.log(firstname);
  console.log("lastname");
  console.log(lastname);

  let user = {
    username: username,
    password: password,
    firstname: firstname,
    lastname: lastname,
    type: type,
  };

  let sql = "INSERT INTO myapp.users SET ?";
  let query = conn.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    // res.send("User inserted");
  });

  res.sendFile(__dirname + "/index.html");
  console.log("I am in middleware");
});

//login instructor
app.get("/instrlogin.html", function (req, res) {
  res.sendFile(__dirname + "/instrlogin.html");
  console.log("I am in middleware");
});

app.post("/instrlogin", function (req, res) {
  const username = req.body.email;
  const password = req.body.psw;
  console.log("username");
  console.log(username);
  console.log("password");
  console.log(password);

  const sql = `select * from myapp.users WHERE username = '${username}' AND password = '${password}' AND type = 'I'`;

  conn.query(sql, (err, result) => {
    if (result.length === 0) {
      console.log("Your info is incorrect! Try again");
      res.sendFile(__dirname + "/index.html");
    } else {
      res.sendFile(__dirname + "/instrview.html");
    }
    console.log("result");
    console.log(result);
  });
});

//login admin
app.get("/admlogin.html", (req, res) => {
  console.log("IAM IN POST");

  //table to see students enrolled
  const sql = `select student_first, student_last from myapp.students WHERE enrolled ='E' `;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.sendFile(__dirname + "/admlogin.html");
  });
});

app.get("/admlogin", (req, res) => {
  //table to see students enrolled
  const sql = `select student_first, student_last from myapp.students WHERE enrolled ='E' `;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.sendFile(__dirname + "/try.ejs");
});

app.post("/admlogin", function (req, res) {
  const username = req.body.email;
  const password = req.body.psw;

  console.log("username");
  console.log(username);
  console.log("password");
  console.log(password);

  const sql = `select * from myapp.users WHERE username = '${username}' AND password = '${password}' AND type = 'A'`;
  const sql15 = `select instructor_name from myapp.instructors WHERE enrolled ='A' `;
  const sql2 = `SELECT * FROM myapp.instructors;`;
  const sql3 = `SELECT * FROM myapp.courses;`;
  const sql14 = `select course_ID from myapp.courses WHERE available ='Y' `;
  const sql5 = `SELECT * FROM myapp.students;`;
  const sql16 = `select student_ID from myapp.students WHERE enrolled ='E' `;

  const sql10 = `select count(*) from myapp.courses WHERE available ='Y' `;
  const sql11 = `select count(*) from myapp.instructors WHERE enrolled ='A' `;
  const sql12 = `select count(*) from myapp.students WHERE enrolled ='E' `;
  const sql17 = `select * from myapp.queries `;

  conn.query(sql10, (err, result10) => {
    if (err) throw err;

    conn.query(sql11, (err, result11) => {
      if (err) throw err;

      conn.query(sql12, (err, result12) => {
        if (err) throw err;

        conn.query(sql14, (err, result14) => {
          if (err) throw err;
          console.log(JSON.stringify(result14[0]));

          conn.query(sql15, (err, result15) => {
            if (err) throw err;
            console.log(JSON.stringify(result15));

            for (var i = 0; i < result14.length; i++) {
              console.log(i, result15[i].instructor_name);
            }

            conn.query(sql16, (err, result16) => {
              if (err) throw err;
              console.log(JSON.stringify(result16));

              for (var i = 0; i < result16.length; i++) {
                console.log(i, result16[i].student_ID);
              }
              conn.query(sql17, (err, result17) => {
                if (err) throw err;
                console.log(JSON.stringify(result17));

                for (var i = 0; i < result17.length; i++) {
                  console.log(i, result17[i]);
                }
                conn.query(sql3, (err, result3) => {
                  if (err) throw err;
                  console.log(JSON.stringify(result3));

                  for (var i = 0; i < result3.length; i++) {
                    console.log(i, result3[i]);
                  }

                  /** console.log(
            JSON.stringify(result14)
              .replaceAll("course_ID", "")
              .replaceAll("[{")
              .replaceAll("}]", "")
              .replaceAll(":", "")
              .replaceAll("{", "")
              .replaceAll("}", "")
              .replaceAll("\"", "")
          );*/

                  res.render("try.ejs", {
                    name: username,
                    result10: JSON.stringify(result10)
                      .replace(/^\D+/g, "")
                      .replaceAll("}]", ""),
                    result11: JSON.stringify(result11)
                      .replace(/^\D+/g, "")
                      .replaceAll("}]", ""),

                    result12: JSON.stringify(result12)
                      .replace(/^\D+/g, "")
                      .replaceAll("}]", ""),
                    result14: result14,
                    result15: result15,
                    result16: result16,
                    result17: result17,
                    result3: result3,
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

app.listen("2021", () => {
  console.log("Server started on port 2021");;
});
