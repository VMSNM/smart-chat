import Conversation from '../models/conversationModel.js'
import Message from '../models/messageModel.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
    try {
        const { message, authUser } = req.body;
        const { id: receiverID } = req.params;
        // const senderID  = req.user._id;
        const senderID  = authUser._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderID, receiverID] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderID, receiverID]
            })
        }

        const newMessage = new Message({
            senderID,
            receiverID,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        // This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // Socket IO functionality will go here
        const receiverSocketId = getReceiverSocketId(receiverID);
        if (receiverSocketId) {
            // io.to(socketId).emit() used to send events to specific client
            io.to(receiverSocketId).emit('newMessage', newMessage)
        }

        res.status(201).json(newMessage)
        
    } catch (error) {
        console.log('Error in sendMessage controller: ', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatID } = req.params;
        const { authUser } = req.body;

        const senderID = req.user._id;
        // const senderID = authUser._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, userToChatID] }
        }).populate('messages'); // Get the actual messages, not the reference id

        if (!conversation) return res.status(200).json([])
        
        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log('Error in getMessages controller: ', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}