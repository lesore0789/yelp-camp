## Live Deploy

Deployed with [Heroku](https://www.heroku.com/).
If you'd like to preview the live version, please click [here](https://ycamp33.herokuapp.com/). 

## This Project Was Built With the Following:

### Front-end

* [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [ejs](http://ejs.co/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [mongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [moment](https://momentjs.com/)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

## App Features

* Responsive web design with [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

* Manage campground posts with basic CRUD functionalities:

  * Create, edit and delete campground posts 
  * Create, edit and delete comments

* Authentication:
  
  * User login with username and password


* Authorization:

  * A user cannot manage posts and view user profile without being authenticated

  * A user cannot edit or delete posts and comments created by other users

* Flash messages responding to users' interaction with the app

