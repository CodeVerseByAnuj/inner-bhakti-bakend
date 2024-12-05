

const signup = async (req, res) => {
    const {name,email,password} = req.body;

    try{
        const userExists = await findUserByEmail(email);
        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }

        const newUser = await createUser (name, email, password);
        res.status(201).json({message:"User registered Successfully", user: newUser});
    } catch (err){
        console.error(err);
        res.status(500).json({message:"Server Error"});
    }
};

module.exports = {signup};