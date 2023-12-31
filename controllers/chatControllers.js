const multer = require("multer");
const axios = require("axios");
require("dotenv").config();
const path = require("path");
const rootDir = require("../utils/root-dir");
const { Op } = require("sequelize");
const Chat = require("../models/chatModel");
const Group = require("../models/groupModel");
const User = require("../models/userModel");
const db = require("../utils/db");

exports.getActiveUsers = async (req, res) => {
  try {
    const groupId = req.get("groupId");

    const group = await Group.findByPk(parseInt(groupId));
    if (!group) throw new Error();
    const users = await group.getUsers({
      raw: true,
      where: {
        id: {
          [Op.not]: req.session.userId,
        },
      },
      attributes: ["name", "email", "id"],
      joinTableAttributes: [],
    });
    const admins = await group.getAdmin({
      raw: true,
      where: {
        id: {
          [Op.not]: req.session.userId,
        },
      },
      attributes: ["name", "email", "id"],
      joinTableAttributes: [],
    });
    res.json({ users, admins });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.getChatPage = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "chat.html"));
};

// exports.saveMessage = async (req, res) => {
//   try {
//     const { message, groupId } = req.body;
//     const chat = await Chat.create({
//       userId: req.session.userId,
//       message,
//       groupId,
//     });
//     res.status(201).json({ message: "success" });
//   } catch (err) {
//     res.status(501).json({ message: "Something went wrong" });
//   }
// };

exports.saveMessage = async (req, res) => {
  try {
    const { message, groupId } = req.body;
    let imageUrl = null;

    if (req.file) {
      const image = req.file.buffer.toString("base64");
      const formData = new FormData();
      formData.append("image", image);

      const response = await axios.post(process.env.IMGBB_API, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      imageUrl = response.data.data.url;
    } else console.log("file not exists");

    const chat = await Chat.create({
      userId: req.session.userId,
      message,
      groupId,
      url: imageUrl,
    });

    res.status(201).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "Something went wrong" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const groupId = req.get("groupId");
    const lastMessageId = req.get("lastMessageId");
    const messages = await Chat.findAll({
      where: {
        groupId,
        id: {
          [Op.gt]: lastMessageId,
        },
      },
      raw: true,
      attributes: ["message", "url", "id", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    console.log(messages);

    res.status(200).json({ messages });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "Something went wrong" });
  }
};

// exports.getAllGroups = async (req, res) => {
//   try {
//     const userId = req.session.userId;
//     const messages = await Chat.findAll({
//       where: {
//         userId,
//       },
//       raw: true,
//       // order: sequelize.col("id"),
//     });
//     res.status(200).json({ messages });
//   } catch (err) {
//     console.log(err);
//     res.status(501).json({ message: "Something went wrong" });
//   }
// };
