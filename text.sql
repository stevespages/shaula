INSERT INTO voyages (depart_from, arrive_at, depart_time, arrive_time, distance, description) VALUES (‘Old Mill Creek, River Dart’, ‘Mount Edgecombe, Pylmouth’, ‘2016-07-21 08:00’, ‘2016-07-21 20:00’, 35, ‘Motored all the way with light head winds. Anchored. Got in a muddle anchoring much to the annoyance of fisherman on the shore who I got rather close to....’);


CREATE TABLE voyages (

id INTEGER PRIMARY KEY,

depart_from TEXT,

arrive_at TEXT,

depart_time TEXT,

arrive_time TEXT, 

distance INTEGER,

description TEXT 

);

