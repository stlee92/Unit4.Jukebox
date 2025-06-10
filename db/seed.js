import db from "#db/client";
import { createPlaylist } from "#db/queries/playlists";
import { createTrack } from "#db/queries/tracks";
import { createPlaylistTrack } from "#db/queries/playlist_tracks";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  for (let i = 1; i <= 20; i++) {
    await createTrack("Track " + i, i * 150000);
  }
  for (let i = 1; i <= 10; i++) {
    await createPlaylist("Playlist " + i, "lorem impsum playlist description");
  }
  for (let i = 1; i <= 15; i++) {
    const playlistId = 1 + Math.floor(i / 2);
    await createPlaylistTrack(playlistId, i);
  }
}
