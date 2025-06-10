import express from express;
const router = express.router();
export default router;

import {createPlaylist, getPlaylists, getPlaylistById} from "#db/queries/playlists";

router.route("/")

router.route("/playlists").get(async(req,res)=>{
    const playlists = await getPlaylists();
    if(!playlists) return res.status(404).json({message: "No playlists found."})
    res.status(201).send(playlists);
})

router.route("/playlists").post(async(req,res)=>{
    if(!req.body)return res.status(400).json({message:"Request body is required."})

    const {name, description} =req.body;
    if(!name || !description) return res.status(400).json({message:"Please fil in the missing name or description."})

    const newPlaylist = await createPlaylist(name, description);
    res.status(201).send(newPlaylist);
})

router.route("/playlists/:id").get(async(req, res)=>{
    const playlist = await getPlaylistById(id)
    res.status(201).send(playlist);
    if(!playlist) return res.status(404).json({message: "Playlist with the specified id does not exist."})
})

router.route("/playlists/:id/tracks").post(async(req,res) =>{
    if (!trackId) return res.status(404).json({message: "Please provide a trackId"})
    const {trackId} = req.body;
    return res.status(201).json({message:"Track added to playlist."})
})
//use router.param?