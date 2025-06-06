-- TODO
DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS playlists_tracks;
DROP TABLE IF EXISTS tracks;

CREATE TABLE playlists (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description VARCHAR(512) NOT NULL
);

CREATE TABLE playlists_tracks(
id SERIAL PRIMARY KEY,
playlist_id INT NOT NULL,
track_id INT NOT NULL UNIQUE,
playlists_id INT NOT NULL REFERENCES playlists(id),
UNIQUE(playlist_id, track_id)
);

CREATE TABLE tracks(
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
duration_ms INT NOT NULL,
playlistTracks_trackId INT NOT NULL REFERENCES playlists_tracks(track_id)
);