.. Shaula documentation master file, created by
   sphinx-quickstart on Wed Nov 14 19:58:13 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Website for Shaula
==================

Contents:

.. toctree::
   :maxdepth: 2

Overview
--------

This website aims to describe Shaula. It will enable voyages to be logged, documents to be uploaded and manuals to be uploaded. The log, documents and manuals will be editable. Editing the site will be restricted to password protected users.

The controllers are written directly into the routes definitions in the routes directory.

Create and update operations should use the same pug files eg. views/voyages/create-update.pug and also the same routes and controllers eg router.post('/create-update', HANDLER) in routes/voyages.js. The form action attribut in the pug file should be made to do this.


Navigation
----------

Home

Login

Voyage Log

Manuals

Documents (logged in only)


Views
-----

All views have website title, photo of Shaula and navigation

1 Home
......

  /

  100 word intro, additional photo(s) of Shaula.

2 Login (form (pop up?))
........................

  /login

  Registration will be hardcoded.

  Links (all users): Reset password.

  User input: email, password

3 List of Log Entries
.....................

  /voyages

  20 word description of voyage logs

  List of log entries in Desc order of departure time

  Links (all users): Log Entry (for each entry in the list)

  Links (logged in): Add Log Entry (once at top), Delete (for each list item. Return to list)

  DB input: n[id, depart_from, arrive_at, depart_time]

4 Log Entry
...........

  /voyages/date_time_departure

  Links (all users): return to List of Log Entries, next, previous (tricky to implement as ids may not be consequtive)

  Links (logged in): Delete (for every photo with description), Edit (once at top. To Add Log Entry with values)

  DB input:  id, depart_from, arrive_at, depart_time, description, n[file_n, photo_description_n]

5 Add Log Entry (form)
......................

  /voyages/create

  DB input: (for edit):  id, depart_from, arrive_at, depart_time, description

  User input: depart_from, arrive_at, depart_time, description, n[photo_file_UPLOAD, description] 

6 List of Manuals
.................

  /manuals

  Links (all users): Manual (for each list item)

  Links (logged in): Add Manual (once at top), Delete (for each list item. Return to list.)
    
  DB input:  id, title

7 Manual
........

  /manuals/name

  Links (all users): return to List of Manuals

  Links (logged in): Edit (once at top. To Add Manual with values)

  DB input: id, title, description, file

8 Add Manual (form)
...................

  /manuals/create

  Dynamic (for edit): id, title, description

  User input: title, description, file_UPLOAD

9 List of Documents (logged in only)
....................................

  /documents

  Links (logged in): Document (for each list item), Add Document (once at top), Delete (for each list item)

  DB input: id, title

10 Document
...........

  /documents/name

  Links (logged in): return to List of Documents, edit (once at top. To Add Document with values)

  DB input: id, title, description, file

11 Add Document (form)
......................

  /documents/create

  DB input: (for edit): id, title, description

  User input: title, description, file_UPLOAD


SQLite Database
---------------

All fields should be Not Null (use defaults).

voyageLogs table
................

  id int, PK etc
  
  depart_from text, required
  
  arrive_at text, required
  
  depart_time ???, required
  
  description text, default: ""

photos table
............

  id int, PK etc
  
  file_name text, required

voyageLogs_photos table
.......................

  voyageLogs_id int, FK, required
  
  photos_id int, FK, required
  
  description text, default: ""

manuals table
.............

  id int, PK etc
  
  title text, required
  
  description text, default: ""
  
  file_name text, default: ""

documents table
...............

  id int, PK etc
  
  title text, required
  
  description text, default: ""
  
  file_name text, default: ""

Routes, Controllers, Views
--------------------------

/
.

Home Page
,,,,,,,,,

`views/index.pug`

Shows home page with approx 100 word description of Shaula and the web site. Could have additional photos (all pages will have a photo of Shaula as a header)

Has a link to login (all users) Dialogue box will appear using javascript so email and password can be entered. On submit redirect to home page with success or failure message?#~!!&^

Table
,,,,,

route prefix is `/`

route is in `routes/index.js`

controller is in the route definition

view is `views/index.pug`


=========================         ==============  ============================
/                                                 /views/
=========================         ==============  ============================
GET  /                            in route        /index.pug
=========================         ==============  ============================

/voyages
........

List of voyages
,,,,,,,,,,,,,,,

`views/voyages/list.pug`

Shows list of all voyages in descending order of depart_time (unique in database).

Each voyage in the list links to that voyage detail page (all users)

Each voyage in the list has a link to delete and (logged in users)

data: n[depart_from, arrive_at, depart_time]

Voyage Detail Page
,,,,,,,,,,,,,,,,,,,,,,,

`views/voyages/detail.pug`

Shows detail for a voyage.

Has a edit photos icon. On clicking all photos + description have a delete link (logged in users)

Has a edit icon. On clicking presents create-update.pug page with values in input fields (logged in users)

data: depart_from, arrive_at, depart_time, description, n[photo_file_n, photo_description_n]

Create and Update Voyage
,,,,,,,,,,,,,,,,,,,,,,,,

`views/voyages/create-update.pug`

Shows form for creating a voyage detail page.

fields for user entry or data from db:

depart_from, arrive_at, depart_time, description, n[photo_file_n, photo_description_n]

Table
,,,,,

routes prefix is `voyages/`

routes are in `routes/voyages.js`

controller prefix (object) is `voyages.`

controllers are in `controllers/voyages.js`

`in route` means the controller is defined in `routes/voyages`

views are in `views/voyages/`


=========================         ==============  ============================
/voyages                          voyages.        /views/voyages
=========================         ==============  ============================
GET  /create                      in route        /create-update.pug
POST /create                      .create-update  REDIR: /voyages/:depart_time
GET  /:depart_time/delete         in route        REDIR: /voyages
GET  /:depart_time/update         in route        /create-update.pug
POST /:depart_time/update         .create-update  REDIR: /voyages/:depart_time
GET  /                            in route        /list.pug
GET  /:depart_time                in route        /detail.pug
=========================         ==============  ============================

To Do
-----

Complete sections on `manuals` and `documents` after implementing the `voyages` section

/manuals
........

List of Manuals
,,,,,,,,,,,,,,,

`views/manuals/list.pug`

Shows list of manuals in alphabetical order.

Each item in list links to detail page for manual'



Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

