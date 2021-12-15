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
app.use(express.static("public"));

//Serves all the request which includes /images in the url from Images folder
app.use("img", express.static(__dirname + "img"));
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
  res.sendFile(__dirname + "/admlogin.html");
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

app.get("/js/hpscript.js", function (req, res) {
  res.sendFile(__dirname + "/js/hpscript.js");
  console.log("sending image");
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
    res.sendFile(__dirname + "/dashboard.html");
  });
});

/**app.get("/admlogin", (req, res) => {
  //table to see students enrolled
  const sql = `select student_first, student_last from myapp.students WHERE enrolled ='E' `;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.sendFile(__dirname + "/dashboard.html");
});*/

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
  const sql23 = `select count(*) from myapp.students `;
  const sql24 = `select count(*) from myapp.instructors `;

  const sql17 = `select * from myapp.qq `;

  const sql20 = `select  firstname, lastname from myapp.users where type = "S"`;
  const sql21 = `select  firstname, lastname from myapp.users where type = "I"`;

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
                  conn.query(sql20, (err, result20) => {
                    if (err) throw err;
                    console.log(JSON.stringify(result20));

                    for (var i = 0; i < result20.length; i++) {
                      console.log(i, result20[i]);
                    }
                    conn.query(sql21, (err, result21) => {
                      if (err) throw err;
                      console.log(JSON.stringify(result21));

                      for (var i = 0; i < result21.length; i++) {
                        console.log(i, result21[i]);
                      }
                      conn.query(sql23, (err, result23) => {
                        if (err) throw err;
                        console.log(JSON.stringify(result23));

                        for (var i = 0; i < result23.length; i++) {
                          console.log(i, result23[i]);
                        }
                        conn.query(sql24, (err, result24) => {
                          if (err) throw err;
                          console.log(JSON.stringify(result24));

                          for (var i = 0; i < result24.length; i++) {
                            console.log(i, result24[i]);
                          }
                          result23 = JSON.stringify(result23)
                            .replaceAll("course_ID", "")
                            .replaceAll("[{")
                            .replaceAll("}]", "")
                            .replaceAll(":", "")
                            .replaceAll("{", "")
                            .replaceAll("}", "")
                            .replaceAll('"', "")
                            .replaceAll("undefinedcount(*)", "");
                          result24 = JSON.stringify(result24)
                            .replaceAll("course_ID", "")
                            .replaceAll("[{")
                            .replaceAll("}]", "")
                            .replaceAll(":", "")
                            .replaceAll("{", "")
                            .replaceAll("}", "")
                            .replaceAll('"', "")
                            .replaceAll("undefinedcount(*)", "");

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
                            result20: result20,
                            result21: result21,
                            result23: result23,
                            result24: result24,
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
      });
    });
  });
});
app.get("/img/forest.png", function (req, res) {
  res.sendFile(__dirname + "/img/forest.png");
  console.log("sending image");
});
app.get("/img/american-football-67439_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/american-football-67439_960_720.png");
  console.log("sending image");
});
app.get(
  "/img/artificial-intelligence-2167835_960_720.png",
  function (req, res) {
    res.sendFile(
      __dirname + "/img/artificial-intelligence-2167835_960_720.png"
    );
    console.log("sending image");
  }
);
app.get("/img/coins-3344603_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/coins-3344603_960_720.png");
  console.log("sending image");
});
app.get("/img/fantasy-2824500_960_720.jpg", function (req, res) {
  res.sendFile(__dirname + "/img/fantasy-2824500_960_720.jpg");
  console.log("sending image");
});

app.get("/img/success-6595539_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/success-6595539_960_720.png");
  console.log("sending image");
});

app.get("/img/pumpkin-5372947_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/pumpkin-5372947_960_720.png");
  console.log("sending image");
});
app.get("/img/question-mark-2492009_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/forest.png");
  console.log("sending image");
});

app.get("/img/computer-1331579_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/computer-1331579_960_720.png");
  console.log("sending image");
});

app.get("/img/blank-profile-picture-973460_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/blank-profile-picture-973460_960_720.png");
  console.log("sending image");
});
app.get("/img/learn-897410_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/learn-897410_960_720.png");
  console.log("sending image");
});

app.get("/img/halloween-959049_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/halloween-959049_960_720.png");
  console.log("sending image");
});
app.get("/img/cat-323262_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/cat-323262_960_720.png");
  console.log("sending image");
});

app.get("/img/pile-1239225_960_720.jpg", function (req, res) {
  res.sendFile(__dirname + "/img/cat-323262_960_720.png");
  console.log("sending image");
});
app.get("/img/blank-profile-picture-973460_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/blank-profile-picture-973460_960_720.png");
  console.log("sending image");
});

app.get("/js/hpscript.js", function (req, res) {
  res.sendFile(__dirname + "/js/hpscript.js");
  console.log("sending image");
});

app.get("/css/instrview.css", function (req, res) {
  res.sendFile(__dirname + "/css/instrview.css");
  console.log("sending image");
});

app.get("/img/pets-3715733_960_720.png", function (req, res) {
  res.sendFile(__dirname + "/img/pets-3715733_960_720.png");
  console.log("sending image");
});
app.get("/img/world.png", function (req, res) {
  res.sendFile(__dirname + "/img/world.png");
  console.log("sending image");
});
const port = "82"
app.listen(port, () => {
  console.log("Server started on port 82");
});
