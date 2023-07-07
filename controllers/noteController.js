const Note = require("../models/note")

//create note method
exports.createNote = async(req, res)=>{
    try {

        const{title, description } = req.body

        const newNote = new Note({
            title: title,
            description: description,
            userId: req.user.id
        })

        await newNote.save()

        res.status(201).json(newNote)
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}

//get all notes method
exports.getAllNotes = async(req, res)=>{
    try {
       
        const allNotes = await Note.find({userId: req.user.id})
        res.status(200).json(allNotes)

    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
        
    }
}

//update note method
exports.updateNote = async(req, res)=>{
    try {
        const{title, description} = req.body

        let note = await Note.findById(req.params.id)
        
        if(!note){
            res.status(404).json({
                success: false,
                message: "Note Not found"
            })
        }

        note.title = title
        note.description = description
        await note.save()

        res.status(200).json(note)
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
        
    }
}

//delete note method
exports.deleteNote = async(req, res)=>{
    try {

        const deleteNote = await Note.findByIdAndRemove(req.params.id)
        res.status(200).json(deleteNote)
        
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
        
    }
}