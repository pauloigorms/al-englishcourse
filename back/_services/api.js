const config = require('_bin/config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const u__db = require('_helpers/connection/users')
const Users = u__db.User
const t__db = require('_helpers/connection/teachers')
const Teachers = t__db.Teachers
const c__db = require('_helpers/connection/comments')
const Comments = c__db.Comments
// U3SMX8v2aYyN3WGlTmL4bFGs9NZmDZ2Qke3lrP
module.exports = {
  register,
  auth,
  getById,
  create__teacher,
  get__teachers,
  create__comment,
  get__comments
}

async function register(params) {
  // validate username
  if (await Users.findOne({ "username": params.username })) {
    throw 'Usuário "' + params.username + '" já existe!';
  } else {
    try {
      const user = new Users(params);
      // hash password
      if (params.password) {
        user.password = bcrypt.hashSync(params.password, 10);
      }
      // save user on datatable
      await user.save().then((r) => {
        return user
      })
      return user
    } catch (e) {
      throw e.message;
    }
  }
}

async function auth(params) {  
  const username = await Users.findOne({ "username": params.username })
  console.log(username)
  // filter to username
  if (username && bcrypt.compareSync(params.password, username.password)) {
    const { password, ...userWithoutHash } = username.toObject()
    const token = jwt.sign({ sub: username._id }, config.secret)
    return {
      ...userWithoutHash,
      token
    }
  }
}

async function getById(user__id) {
  return await Users.findById(user__id).select('-hash')
}

async function create__teacher(params) {
  try {
    const teacher = new Teachers(params)
    await teacher.save()
  } catch (e) {
    throw e.message;
  }
}

async function get__teachers() {
  return await Teachers.find()
}

async function create__comment(params) {
  try {
    const comment = new Comments(params)
    await comment.save()
  } catch (e) {
    throw e.message;
  }
}

async function get__comments() {
  return await Comments.find()
}