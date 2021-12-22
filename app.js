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
let course1 = "COURSE1";
const list = new Array();
function getList(value) {
  list.push(value);
}
var vis = "hidden";
if (list.length > 1) vis = "hidden";
else {
  vis = "visible";
}

app.post("/login", function (req, res) {
  const username = req.body.email;
  const password = req.body.psw;
  console.log("username");
  console.log(username);
  console.log("password");
  console.log(password);
  user = username;
  console.log("USERNAME");
  console.log(user);
  console.log("COURSE1");
  console.log(course1);

  const sql = `select * from myapp.users WHERE username = '${username}' AND password = '${password}' AND type = 'S'`;
  const sql114 = `select course_ID from myapp.courses WHERE available ='Y' `;
  const sql10 = `select course from myapp.app_reqs LIMIT 1`;

  var vis = "hidden";
  if (list.length > 1) vis = "hidden";
  else {
    vis = "visible";
  }
  conn.query(sql, (err, result) => {
    if (result.length === 0) {
      console.log("Your info is incorrect! Try again");
      res.sendFile(__dirname + "/index.html");
    }

    conn.query(sql114, (err, result114) => {
      if (err) throw err;
      console.log(JSON.stringify(result114));

      for (var i = 0; i < result114.length; i++) {
        console.log(i, result114[i].course_ID);
      }
      conn.query(sql10, (err, result10) => {
        if (err) throw err;
        console.log(JSON.stringify(result10).replaceAll("[{"));
        result10 = JSON.stringify(result10)
          .replaceAll("course", "")
          .replaceAll("[{")
          .replaceAll("}]", "")
          .replaceAll(":", "")
          .replaceAll("{", "")
          .replaceAll("}", "")
          .replaceAll('"', "")
          .replaceAll("undefined", "");

        res.render("streqenrol.ejs", {
          name: username,
          result114: result114,
          result: result,
          result10: result10,
          vis: vis,
        });
      });
    });
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
  const sql12 = `CREATE TABLE myapp.posts(id INT AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), 1 VARCHAR(255), 2 VARCHAR(255),
   PRIMARY KEY (id))`;
  conn.query(sql, (err, result) => {
    if (result.length === 0) {
      console.log("Your info is incorrect! Try again");
      res.sendFile(__dirname + "/index.html");
    }

    conn.query(sql12, (err, result12) => {
      res.render("instrview.ejs", {
        name: username,
      });

      console.log("result");
      console.log(result);
    });
  });
});
app.get("/subm.html", (req, res) => {
  console.log("IAM IN POST");
  const sql = `select col1, col2, col3, col4 from myapp.cs345hw1pollycle WHERE id = 2 `;
  conn.query(sql, (err, result) => {
    console.log(result);
    res.render("subm.ejs", {
      result: result,
    });
  });
});

app.post("/feedbackinstr", (req, res) => {
  const answer = req.body.answer;
  const grade = req.body.grade;

  let user = {
    answer: answer,
    grade: grade,
  };

  let sql = "INSERT INTO myapp.cs345hw1pollyclefeedback SET ?";
  const date = new Date().toLocaleDateString();
  let query = conn.query(sql, user, (err, result) => {
    if (result.length === 0) {
      console.log("Your info is incorrect! Try again");
      res.sendFile(__dirname + "/instrview.html");
    }
    console.log(result);
    res.render("instrview.ejs", {
      name: date,
    });

    // res.send("User inserted");
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

  const sql31 = `select count(*) from myapp.users WHERE type ='I' `;
  const sql32 = `select count(*) from myapp.users WHERE type ='S' `;

  const sql10 = `select count(*) from myapp.courses WHERE available ='Y' `;
  const sql100 = `select count(*) from myapp.courses `;

  const sql11 = `select count(*) from myapp.instructors WHERE enrolled ='A' `;
  const sql12 = `select count(*) from myapp.students WHERE enrolled ='E' `;
  const sql23 = `select count(*) from myapp.students `;
  const sql24 = `select count(*) from myapp.instructors `;

  const sql17 = `select * from myapp.queries `;

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
                          conn.query(sql31, (err, result31) => {
                            if (err) throw err;
                            console.log(JSON.stringify(result31));

                            for (var i = 0; i < result31.length; i++) {
                              console.log(i, result31[i]);
                            }
                            conn.query(sql32, (err, result32) => {
                              if (err) throw err;
                              console.log(JSON.stringify(result32));

                              for (var i = 0; i < result32.length; i++) {
                                console.log(i, result32[i]);
                              }
                              conn.query(sql100, (err, result100) => {
                                if (err) throw err;
                                console.log(JSON.stringify(result100));

                                for (var i = 0; i < result100.length; i++) {
                                  console.log(i, result100[i]);
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

                                result31 = JSON.stringify(result31)
                                  .replaceAll("count(*)", "")
                                  .replaceAll("[{")
                                  .replaceAll("}]", "")
                                  .replaceAll(":", "")
                                  .replaceAll("{", "")
                                  .replaceAll("}", "")
                                  .replaceAll('"', "")
                                  .replaceAll("undefined", "");

                                result32 = JSON.stringify(result32)
                                  .replaceAll("count(*)", "")
                                  .replaceAll("[{")
                                  .replaceAll("}]", "")
                                  .replaceAll(":", "")
                                  .replaceAll("{", "")
                                  .replaceAll("}", "")
                                  .replaceAll('"', "")
                                  .replaceAll("undefined", "");

                                result100 = JSON.stringify(result100)
                                  .replaceAll("count(*)", "")
                                  .replaceAll("[{")
                                  .replaceAll("}]", "")
                                  .replaceAll(":", "")
                                  .replaceAll("{", "")
                                  .replaceAll("}", "")
                                  .replaceAll('"', "")
                                  .replaceAll("undefined", "");

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
                                  result31: result31,
                                  result32: result32,
                                  result100: result100,
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
app.post("/requests", function (req, res) {
  const name = req.body.course1;
  const course_name = req.body.value;
  const course = req.body.name;

  console.log("name");
  console.log(name);
  console.log("course_name");
  console.log(course_name);
  console.log("course");
  console.log(course);
  console.log("USERNAME");
  console.log(user);

  let user1 = {
    course: name[0],
    course_name: name[1],
    name: user,
  };

  const sql114 = `select course_ID from myapp.courses WHERE available ='Y' `;
  const sql10 = `select course from myapp.app_reqs LIMIT 1`;

  const sql = "INSERT INTO myapp.requests SET ?";
  conn.query(sql, user1, (err, result) => {
    if (result.length === 0) {
      console.log("Your info is incorrect! Try again");
      res.sendFile(__dirname + "/index.html");
    }
    conn.query(sql114, (err, result114) => {
      if (err) throw err;
      console.log(JSON.stringify(result114));

      for (var i = 0; i < result114.length; i++) {
        console.log(i, result114[i].course_ID);
      }
      console.log(result);
      console.log(result114);

      conn.query(sql10, (err, result10) => {
        if (err) throw err;
        console.log(JSON.stringify(result10).replaceAll("[{"));
        result10 = JSON.stringify(result10)
          .replaceAll("course", "")
          .replaceAll("[{")
          .replaceAll("}]", "")
          .replaceAll(":", "")
          .replaceAll("{", "")
          .replaceAll("}", "")
          .replaceAll('"', "")
          .replaceAll("undefined", "");
        list.push(name);

        console.log("NAME");
        list.push(result10);
        list.push(user);
        console.log("COURSE");
        console.log(list);
        res.render("streqenrol.ejs", {
          name: name,
          result114: result114,
          result10: result10,
          vis: vis,
        });
      });
    });
  });
  console.log("I am in middleware");
});
app.post("/quiery", function (req, res) {
  const name = req.body.course;
  const date = new Date().toLocaleDateString();
  let typeuser = "unknown";

  console.log("name");
  console.log(name);
  console.log("date");
  console.log(date);
  console.log("typeuser");
  console.log(typeuser);

  let user = {
    quiery: name,
    date: date.toString(),
    typeuser: typeuser,
  };

  let sql = "INSERT INTO myapp.queries SET ?";
  let query = conn.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    // res.send("User inserted");
  });

  res.sendFile(__dirname + "/index.html");
  console.log("I am in middleware");
});

app.post("/submit", function (req, res) {
  const col1 = req.body.answer;
  const col2 = req.body.picture;
  const col3 = req.body.saved;

  console.log("username");
  console.log(col1);
  console.log("password");
  console.log(col2);
  console.log("firstname");
  console.log(col3);

  let user = {
    col1: col1,
    col2: col2,
    col3: col3,
  };

  let sql = "INSERT INTO myapp.cs345hw1pollycle SET ?";
  let query = conn.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.render("assign.ejs");
  });
});
app.post("/instrlogin", function (req, res) {
  const username = req.body.email;
  const password = req.body.psw;
  console.log("username");
  console.log(username);
  console.log("password");
  console.log(password);

  const sql = `select * from myapp.users WHERE username = '${username}' AND password = '${password}' AND type = 'I'`;
  const sql12 = `CREATE TABLE myapp.posts(id INT AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), 1 VARCHAR(255), 2 VARCHAR(255),
   PRIMARY KEY (id))`;
  conn.query(sql, (err, result) => {
    if (result.length === 0) {
      console.log("Your info is incorrect! Try again");
      res.sendFile(__dirname + "/index.html");
    }

    conn.query(sql12, (err, result12) => {
      res.render("instrview.ejs", {
        name: username,
      });

      console.log("result");
      console.log(result);
    });
  });
});

app.get("/createpoststable", (req, res) => {
  let sql = `CREATE TABLE myapp.posts(id INT AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created...");
  });
});
app.get("/assign.html", function (req, res) {
  res.sendFile(__dirname + "/assign.html");
  console.log("I am in middleware");
});
app.get("/courseview.html", function (req, res) {
  res.sendFile(__dirname + "/courseview.html");
  console.log("sending image");
});
var port = "82";
app.listen(port, () => {
  console.log("Server started on por 82");
});
