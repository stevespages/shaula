# shaula
Website for the yacht, Shaula. This site was made using Express Application Generator. As the website is developed and maintained changes are uploaded to Github which automatically replaces the version of the website hosted at Heroku.

## Overview
This website describes Shaula. It will enable voyages to be logged and documents and manuals to be uploaded to be uploaded. The log, ,documents and manuals will be editable. Editing the site will be restricted to a single password protected user who will be the owner of the yacht. This readme document describes the organization of the site.

## Navigation
* Home
* Login. When logged in replaced by Sign Out
* Voyages
* Manuals
* Documents

## Views
All views will have the website title, a header logo of Shaula and navigation.

### Home. `/`
Short introduction to the yacht with additional photo(s) of Shaula.
Links (all users): Login

### Login. `/login`
There will be one administrator account. Login will require email and password. 

### List of Log Entries. `/voyages`
Short description of voyage logs.

List of log entries in descending order of departure time.

Links (all users): Log Entry (for each entry in the list).

Links (logged in): Add Log Entry (once at top), Delete (for each list item; return to list).

DB input: n[id, depart_from, arrive_at, depart_time]

### Log Entry. `/voyages/id`
Links (all users): return to List of Log Entries, next, previous (tricky to implement as ids may not be consecutive?)

Links (logged in): Delete (for every photo with description), Edit (once at top. Goes to Add Log Entry)

DB input: id, depart_from, arrive_at, depart_time, description, n[file_n, photo_description_n]

### Add Log Entry. `/voyages/create`
DB input: (for edit): id, depart_from, arrive_at, depart_time, description

User input: depart_from, arrive_at, depart_time, description, n[photo_file_UPLOAD, description]

### List of Manuals. `/manuals`
Links (all users): Manual (for each item)

Links (logged in): Add Manual (once at top), Delete (for each list item. Return to list.)

DB input: id, title

### Manual. `/manuals/id`
Links (all users): return to List of Manuals

Links (logged in): Edit (once at top. To Add Manual with values)

DB input: id, title, description, file

### Add Manual. `/manuals/create`
Dynamic (for edit): id, title, description

User input: title, description, file_UPLOAD

### List of Documents (logged in only). `/documents`
Links (logged in): Document (for each list item), Add Document (once at top), Delete (for each list item)

DB input: id, title

### Document. `/documents/id`
Links (logged in): return to List of Documents, edit (once at top. To Add Document with values)

DB input: id, title, description, file

### Add Document `/documents/create`
DB input: (for edit): id, title, description

User input: title, description, file_UPLOAD

## SQLite Database

All fields should be Not Null (use defaults).
voyages table

    CREATE TABLE voyages (

    id INTEGER PRIMARY KEY,

    depart_from TEXT NOT NULL,

    arrive_at TEXT NOT NULL,

    depart_time TEXT NOT NULL,

    arrive_time TEXT DEFAULT “”,

    distance INTEGER,

    description TEXT DEFAULT “”

    );

    Note: dates should be inserted as: YYYY-MM-DD HH:MM

    INSERT INTO voyages (

        depart_from, arrive_at, depart_time, arrive_time, distance, description

        )

    VALUES

        (

            “Old Mill Creek, River Dart”,

            “Mount Edgecombe, Pylmouth”,

            “2016-07-21 08:00”,

            “2016-07-21 20:00”,

            35,

            “Motored all the way with light head winds. Anchored. Got in a muddle anchoring much to the annoyance of fisherman on the shore who I got rather close to....”

        )

        (

            “Mount Edgecombe, Plymouth”,

            “Portscatho”,

            “2016-07-22 11:00”,

            “2016-07-22 20:00”,

            35,

            “Motored all the way with roller reefing jib out. Anchored”

        );

photos table

    CREATE TABLE photos (

    id INTEGER PRIMARY KEY,

    file_name TEXT NOT NULL

    );

voyages_photos table

    CREATE TABLE voyages_photos (

    FOREIGN KEY(voyages_id) REFERENCES voyages(id),

    FOREIGN KEY(photos_id) REFERENCES photos(id),

    description TEXT DEFAULT “”

    );

manuals table

    To Do: complet this after implementing voyages.

        id int, PK etc

        title text, required

        description text, default: “”

        file_name text, default: “”

documents table

    id int, PK etc

    title text, required

    description text, default: “”

    file_name text, default: “”

## Routes, Controllers, Views
### Home Page. `/`
Route | Controller | View
----- | ---------- | ----
GET/ | in route | index.pug

### Voyages. `/voyages`
Route | Controller | View
----- | ---------- | ----
**/voyages** | **voyages.** | **/views/voyages**
GET/create | in route | /create-update.pug
POST/create |.create_update | REDIR: /voyages/:id
GET/:id/delete | in route | REDIR: /voyages
GET/:id/update | in route | /create-update.put
POST/:id/update | .create_update | REDIR: /voyages/:id
GET/ | in route | /list.pug
GET/:id | in route | /detail.pug

## To Do
Complete sections on *manuals* and *documents* after implementing the *voyages* section

### Manuals. `/manuals`
Route | Controller | View
----- | ---------- | ----
**/manuals** | **manuals.** | **/view/manuals**
