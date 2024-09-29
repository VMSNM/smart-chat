import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        /* const { id: loggedInUserID } = req.params; */
        const loggedInUserID = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserID }}).select('-password')

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log('Error in getUsersForSidebar controller: ', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}