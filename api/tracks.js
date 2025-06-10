import express from express;
const router = express.router();
export default router;

import {getAllTracks, getTrackById } from "#db/queries/tracks";

router.route("/tracks").get(async(req,res) => {
    const tracks = await getAllTracks();
    if(!tracks)return res.status(400).json({message:"No tracks found."})
    res.send(tracks);
})

router.route("/tracks/:id").get(async(req,res)=>{
    const track = await getTrackById();
    if (!track) return res.status(400).json({message:"No tracks found with specified id."})
    res.send(track);
})
router.param("id", async (req, res, next, id)=>{
    const task = await getTaskById(id);
    if(!task) return res.status(404).send("Task not found");
    if(task.user_id !== req.user.id){return res.status(403).send("This is not your task")};
})
req.task = task;
nex();









router.route(":/id").delete(async(async(req,res) => {res.sendStatus(204)}))