import express from express;
const router = express.router();
export default router;

import {createPlaylist, getPlaylists, getPlaylistById, addTrackToPlaylist} from "#db/queries/playlists";


router.route("/").get(async(req,res)=>{
    const playlists = await getPlaylists();
    if(!playlists) return res.status(404).json({message: "No playlists found."})
    res.status(201).send(playlists);
})

router.route("/").post(async(req,res)=>{
    if(!req.body)return res.status(400).json({message:"Request body is required."})

    const {name, description} = req.body;
    if(!name || !description) return res.status(400).json({message:"Please fill in the missing name or description."})

    const newPlaylist = await createPlaylist(name, description);
    res.status(201).send(newPlaylist);
})

router.param("id", async(req, res, next, id)=>{
    const playlist = await getPlaylistById(id)
    res.status(201).send(playlist);
    if(!playlist) return res.status(404).json({message: "Playlist with the specified id does not exist."})
    req.playlist = playlist;
    next();
    })

router.route(":id/tracks").post(async(req,res) =>{
    if (!trackId) return res.status(404).json({message: "Please provide a trackId"})
    const {trackId, name, description} = req.body;
    const addTrack = await addTrackToPlaylist(name, description);
    return res.status(201).json({message:"Track added to playlist."})
})
// should i use router.param?