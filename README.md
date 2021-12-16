
# [CS 355 Chalkboard](https://72e4-96-250-179-190.ngrok.io/)

   One very important aspect is that to run the program the server needs to be connected and the port might be in use for running is better to use port 2020.
   One additional thing is needed to be downloaded is npm install ejs. User, Instructor, or Admin can log in but can not access each other's pages. Sign Out button implemented      to sign out which takes the user to a homepage. Admin Dashboard shows sample queries of students or instructors for courses and dates, courses, and instructors and students      available. The database is very small and has only a few students or instructors for demonstration. Color lines students or instructors enrolled shows actual percentage for            students, instructors, or courses actually enrolled or available. If not running because of the error : ADDR IN USE please change the port manually
   ![Screenshot (892)](https://user-images.githubusercontent.com/90509231/145150882-d99d0ff5-66c0-4961-a4ff-dd038fc0c136.png)
   
   ![Screenshot (921)](https://user-images.githubusercontent.com/90509231/146027596-80f93470-3a67-4f06-bf82-c1bd53d8e3d3.png)
   Database stores information about users and courses, 
   ![Screenshot (923)](https://user-images.githubusercontent.com/90509231/146028383-f64e621c-dab7-4678-815f-b41f045ee77a.png)

   Here are the passwords and to sign up and sign in as instructor password and email should end with 1, admin 2, and student do not have to have any      digits in their email or password and ends with @.
   User sign up is implemented as users, can sign up as admin, instructor, or student by having email and password that end without a number, with 1 for 
   instructor, and 2 for admin. Passwords and usernames and types are in database screenshot. Example of making a type of user is
   annygle@yahoo.com Dano600@@ for student, annygle1@yahoo.com  Dano600@@1 for instructor, and annygle2@yahoo.com Dano600@@@2 for admin. 
   With sign up page a user can sign up with ther first and last name, email(used as username), password, and in database it is assigned a unique id.
   ![Screenshot (928)](https://user-images.githubusercontent.com/90509231/146342726-bd340479-8af9-4663-878e-d25ef8e329b5.png)
Instructor log in
   ![image](https://user-images.githubusercontent.com/90509231/146032971-0d8e1f16-6208-4850-a88f-079e5ab0b181.png)
   Admin log in.
   ![image](https://user-images.githubusercontent.com/90509231/146033008-224d9764-9d71-43a4-a9a2-d7cf7c53e367.png)

   Each sign in has password validation
   ![image](https://user-images.githubusercontent.com/90509231/146033443-7407887b-e1e0-429c-8c2b-44379bf50662.png)
   ![image](https://user-images.githubusercontent.com/90509231/146033622-b992eca6-8af2-4271-b43c-c66be8430b5f.png)
   
![image](https://user-images.githubusercontent.com/90509231/146033662-3a11fa51-fb52-440f-a5ee-924174c8ef9a.png)
The validation implemented for each account.
User session is possible only if the user logged in:
![image](https://user-images.githubusercontent.com/90509231/146034021-36cde670-8e63-4f80-b2b8-64a2756ee8e6.png)   ![Screenshot (898)](https://user-images.githubusercontent.com/90509231/145153429-bf198a94-2741-4853-bc3e-b02f2e5759aa.png)
For instance if the user is not logged in and trying to access admin account.
If the user is trying to access the account of admin of instructor with the username of a student it would not work.
Admin view:
![image](https://user-images.githubusercontent.com/90509231/146034739-88ee6f14-d768-4f0e-bbce-5b52b4fc7cde.png)
![image](https://user-images.githubusercontent.com/90509231/146034792-cc25df54-e364-4372-af90-9bbdcf88e864.png)
![image](https://user-images.githubusercontent.com/90509231/146034931-bb6b0182-9f6b-4c22-af06-e092332279a1.png)
![image](https://user-images.githubusercontent.com/90509231/146035207-b8f53581-db32-43db-be65-40b0ec2688e7.png)

When a new user signs up
![image](https://user-images.githubusercontent.com/90509231/146041583-738163dd-ac76-4857-830c-d2beb1baccc1.png)
Database updates, unique id adds:

![Screenshot (925)](https://user-images.githubusercontent.com/90509231/146042847-a210fd0d-671b-45a1-9666-61aa2fda36c9.png)

and it shows in admin view:
![Screenshot (929)](https://user-images.githubusercontent.com/90509231/146348812-6de497bd-03e0-4116-abcc-c68e5b2fb173.png)


![image](https://user-images.githubusercontent.com/90509231/146043258-bcc7e0b6-b6c3-4787-8eba-20d4396837e0.png)

The information from the database enrolled  students or instructors available shows in admin view as a percentage:
![Screenshot (926)](https://user-images.githubusercontent.com/90509231/146055650-1e6cb630-15af-41b5-b40b-5c7b2386fb2e.png)
![image](https://user-images.githubusercontent.com/90509231/146055956-9f324072-b4d7-4fb9-ba09-0465c1dd029c.png)

Instructrs and students showed in total so additional users from sign up can be seen.

![image](https://user-images.githubusercontent.com/90509231/146056185-1b032c37-c769-44d9-93d4-e75cf5ea9f03.png)


![image](https://user-images.githubusercontent.com/90509231/146034861-22fa4e8a-4de7-456d-8c1c-c4e8e7afae51.png)


Username updates with the administrator who uses the database.
    ![Screenshot (900)](https://user-images.githubusercontent.com/90509231/145154096-11987f41-0edd-44c5-b120-7405a2fa7a51.png)
    Instructors, Students and Search queries.
    Instructors, students, and admin can log in to the other person account because they have a requrement when signing up to have password end with 2 for admin and 1 for
    instructor.
    
   In the dashbaord students and instructors(total) updates when a new user signs up as well as the enrolled statistics:
   ![image](https://user-images.githubusercontent.com/90509231/146341994-9243ea1c-3ff4-4223-9372-58ee137052c5.png)
![image](https://user-images.githubusercontent.com/90509231/146342037-f3592abf-2b74-4ea7-81ec-e29385f60297.png)
![image](https://user-images.githubusercontent.com/90509231/146342071-9ed2e0fa-32d3-4aa2-b674-c29b12a96f19.png)

    Incorrect credentials just bring the user back to the index page. No special message or any suggestions.
   Database was created for deliverable 3 and called myapp. It has the following tables:
   ![Screenshot (749)](https://user-images.githubusercontent.com/90509231/144548064-dc90d470-86c6-4b51-bae6-196f660ba4c8.png)
   To run the app the live server was created and started with nodemon (to install nodemon is npm i 
   ![Screenshot (745)](https://user-images.githubusercontent.com/90509231/144548199-408b0e37-af72-43cd-bb26-4fdc986f0aba.png)
   To create json file it is needed to do npm init, and the entrypoint is app.js. If the port the port for the server can be changed. 
   ![Screenshot (750)](https://user-images.githubusercontent.com/90509231/144548688-42e8b6ec-eb06-4c50-9b07-ef543c647183.png)
   These are tables from the myapp database that are used for queries.
   ![Screenshot (751)](https://user-images.githubusercontent.com/90509231/144548865-edd1818a-cf3f-4d00-81f8-72bdfb86cc7c.png)\
   ![Screenshot (752)](https://user-images.githubusercontent.com/90509231/144549010-a35f74a9-ee6c-4696-80ad-228c024b6dea.png)
   ![Screenshot (753)](https://user-images.githubusercontent.com/90509231/144549137-03910132-2241-43e0-a392-08e183ecc956.png)
   For database mysql is used so npm install --save mysql express needed on git bash. To start the server on gitbash npm istall -g nodemon.
   To run the routes the rout can be added:
   ![Screenshot (755)](https://user-images.githubusercontent.com/90509231/144550066-56028c99-26b2-4d58-8240-caed5a4f78eb.png)
   ![Screenshot (756)](https://user-images.githubusercontent.com/90509231/144550098-3957f907-02b6-4ca8-b3e2-96b3c2c43374.png)

  

1. https://stringbuilder101.github.io/cb/
2. Polina Zhukovskaya Clements worked independently
3. Homepage has three buttons to log in for students, admin, and instructor.(one on the web page and 2 in navigation bar, navigation bar has a button for sign up page)
   https://stringbuilder101.github.io/cb/ Log In validates username in the form of an email and passsword.
   Admin View can only be accessed through the Log In page for admin. It has tree tables to see what courses, students, and instructors are currently enrolled or available. It   
   has    a table for search quieries, and navigation to ga back to the previous menu.
   https://codepen.io/polinazclements/full/ExvrzYb 
   User Sign Up page
   https://codepen.io/polinazclements/full/rNzoxaW the app features form validation and asks for username, password, first and last name, user is assigned a key, and      and email are unique.
   User Log In
   User can not Log In or access any features without proper account and all three types of users have different buttons for log in in navigation bar and on the homepage the log
   in for a student.
   https://stringbuilder101.github.io/cb/ It checks username and password. 
   Admin log in page https://codepen.io/polinazclements/full/QWMYjNx
   Admin can search https://codepen.io/polinazclements/full/Vwzqpad the whole database, make a search by instructors id, and student's id. 
   Instructor log in page https://codepen.io/polinazclements/full/rNzPVoQ
   Users are students and instructors and they redirected to their pages once they are logged in.
   Instructor's page https://codepen.io/polinazclements/full/vYJPrYV Instructor can approve a request to be added to the roster on the right side of the page.
   Instructor can create a course, add or remove another instructor to a course, and each course consists of a unique number, name, set of instructors, roster, and lessons. 
   Instructor can see the roster of students by opening a hamburger and switch between rosters in the hamburger. Students do not have a roster. Inctructor can open the whole        page with rosters. https://codepen.io/polinazclements/full/xxLyyjG
   Course Enrollment is done through this page: https://codepen.io/polinazclements/full/NWvJWqa once the student gets the request approved. Approval of the course is on the     
   right    side of this page and then the student can enroll. Once the enrollment button is clicked the student can get to the page of the course.               
   https://codepen.io/polinazclements/full/NWvJWqa where they can see materials, lessons, and recorded lectures on the left hamburger bar.
   On the web page of student https://codepen.io/polinazclements/full/dyzaxge Students can search courses, request to be added to the roster (on the right side of the age)
   view their search results and view courses they are enrolled in on the left. Only when their request to enroll is approved they can click wnroll and go to the course page.
   https://codepen.io/polinazclements/full/rNzRNeo Here a student can submit a few requests to be added to the roster of different instructors. From student's page a user can go 
   there by requesting to be added to the roster by the button on the right of search courses.
   Course page after enroll is clicked https://codepen.io/polinazclements/full/jOLJaYK It has lessons, on the left hamburger, studends can see which lessons are graded by 
   clicking on the right button, it features videos and recordings. When clicking on homework 1 the student can view the assignment which can be viewed here 
   https://codepen.io/polinazclements/full/WNEYJoQ. The assignment has a button to save a draft, submit, and upload file.
   On the instructor's page there are courses previously taught that can be reused.
   https://codepen.io/polinazclements/full/vYJPrYV
   Instructor's page https://codepen.io/polinazclements/full/vYJPrYV and once instructor creates and assignemnt the page is here: 
   The instructor receives the assignment in the following view https://codepen.io/polinazclements/full/oNeVyzM and can grade it. It has feedback section, checkbox allows to        resubmit. On the instructor's page on the right the instructor can see the request, and approve it by click. For questions in assignemnts a student has the black spot for        the answer. https://codepen.io/polinazclements/full/WNEYJoQ 
   A more visual representation and functionality of the web-site and additionally added to the following repository: 
   https://codepen.io/polinazclements/pens/public?cursor=ZD0wJm89MSZwPTEmdj01Njc0NDI0Ng==
4. HTML, CSS, JS
5. Express and Node JS
6. MySQL
7. https://github.com/Stringbuilder101/chalkboard/blob/main/README.md https://stringbuilder101.github.io/chalkboard/    
8. All pages are connected but not accessible because of the password.
9. https://codepen.io/polinazclements/pens/public?grid_type=list List of all pages
10. Home Page
![Screenshot (341)](https://user-images.githubusercontent.com/90509231/142726724-919c4939-8df4-4cf6-9ee2-ba68eb6b1a65.png)
Student's Submission page
![Screenshot (346)](https://user-images.githubusercontent.com/90509231/142726816-8fc24477-5c40-41bb-a9af-1aa37fa19f45.png)
Instructor's view page
![Screenshot (348)](https://user-images.githubusercontent.com/90509231/142726882-070b5087-43ea-4726-9e2c-5e516af40224.png)
Student that is enrolled course page, Instructor's assignments are on the left of the student view, or videos can be viewed
at the bottom of student's assignemnts page.
https://codepen.io/polinazclements/full/YzxRevG
![Screenshot (452)](https://user-images.githubusercontent.com/90509231/143059764-1350329d-e2e6-40f6-af37-4af6e8d6b7a4.png)
![Screenshot (349)](https://user-images.githubusercontent.com/90509231/142726940-7cd1815c-e29b-4f2e-8808-8bf78d586808.png)
Student's page to request to enroll and search for courses and view if their request was approved.
![Screenshot (350)](https://user-images.githubusercontent.com/90509231/142727020-c0c68059-7c59-4e3f-8d36-bd0e61dd1f49.png)
Student's page to submit enrollment request
![image](https://user-images.githubusercontent.com/90509231/142727083-1b54f9b3-1784-4121-ad7f-00b836a2d06c.png)
Dashboard with tables for courses, queries, students, and instructors enrolled or available.
![Screenshot (354)](https://user-images.githubusercontent.com/90509231/142727195-0e8f4f8c-c4b7-4109-9222-9a450c8e2366.png)
Student's assignment page
![Screenshot (355)](https://user-images.githubusercontent.com/90509231/142727336-0fa12101-9fb3-4705-b4be-a142c9caf046.png)
Sign Up page with password validation
![image](https://user-images.githubusercontent.com/90509231/142727430-ab8cc340-137b-4cec-9340-bad4ca2026db.png)
Admin view to search by student and instructor's id.
![Screenshot (357)](https://user-images.githubusercontent.com/90509231/142727489-878c9063-dc08-407b-bb08-bf151fc394bb.png)
Log In for Admin
![Screenshot (359)](https://user-images.githubusercontent.com/90509231/142727555-59936e52-f8cd-4db4-b558-984ecc1eb936.png)
Log In for Instructor(different page)
![Screenshot (360)](https://user-images.githubusercontent.com/90509231/142727611-75f66fb6-353f-4128-9315-b5d8e181d97c.png)
(Student log in is on the home page)
Images used from pixabay.com free to use for non comercial purposes with the lisence.
4. Front End - HTML, CSS, JAVAScript. 
5. Backend - AJAX, PHP
6. Mongo DB or SQL
7. https://github.com/Stringbuilder101/chalkboard/blob/main/README.md 
The differeneces arised from a more closely following project requrents. 









