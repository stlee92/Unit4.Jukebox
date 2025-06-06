import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  for (let i = 1; i <= 10; i++) {
    const playlist = await createPlaylists_Tracks(name);
    for (let j = 1; j <= 20; j++) {
      const track = await addTrack(name, duration);
    }
  }
}
