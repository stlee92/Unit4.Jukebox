import db from "#db/client";

export async function createPlaylist(name, description) {
  const sql = `INSERT INTO playlists (name, description) VALUES ($1,$2) RETURNING *`;
  const {
    rows: [playlist],
  } = await db.query(sql, [name, description]);
  return playlist;
}

export async function getPlaylists(name, description) {
  const sql = `SELECT * FROM playlists`;
  const { rows: playlists } = await db.query(sql, [name, description]);
  return playlists;
}

export async function getPlaylistById(id) {
  const sql = `SELECT * FROM playlists WHERE id=$1`;
  const {
    rows: [playlist],
  } = await db.query(sql, [id]);
  return playlist;
}

export async function addTrackToPlaylist(name, description) {
  const sql = `INSERT INTO playlists (name, description) VALUES ($1,"description lorem ipsum")`;
  const {
    rows: [track],
  } = await db.query(sql, [name, description]);
} //track should be sent in request body. how to test in thunderclient?
