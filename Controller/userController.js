

const userData = (req,res) =>{
    const {name,age} = req.body;
    res.status(200).json({message:`you successfully created ${name} age =${age}`})
}

module.exports = {userData};