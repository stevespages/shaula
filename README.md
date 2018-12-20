# shaula
Website for the yacht, Shaula. This site was made using Express Application Generator.

## Overview
This website aims to describe Shaula. It will enable voyages to be logged, documents to be uploaded and manuals to be uploaded. The log, ,documents and manuals will be editable. Editing the site will be restricted to password protected users. This readme document describes the organization of the site.

## Navigation
* Home
* Login
* Voyage
* Manuals
* Documents (display to logged in users only)

## Views
All views will have the website title, a header photo of Shaula and navigation.

### Home /
Short introduction to the yacht with additional photo(s) of Shaula.

### Login /login
There will be one administrator account. The administrator can create new editor accounts. Editor accounts can do everything the administrator account can do except create editor accounts. Login will require email and password. If password forgotten then send email and allow new password to be generated on answering that email. User should then have to create a new password to be allowed to proceed.

### List of Log Entries /voyages
Short description of voyage logs.

List of log entries in descending order of departure time.

Links (all users): Log Entry (for each entry in the list).

Links (logged in): Add Log Entry (once at top), Delete (for each list item; return to list).

DB input: n[id, depart_from, arrive_at, depart_time]

### Log Entry /voyages/id
Links (all

