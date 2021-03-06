const WxClassicModel = require('../models/wx/Classic')
const { splitParams, returnClient } = require('../utils/utils')
const moment = require('moment');

const uploadWechat = async (req, res, next) => {
  console.log(req.body)
  const file = req.file
  returnClient(res, 200, 0, '添加成功!', { data: file })
}
const createClassic = async (req, res, next) => {
  await WxClassicModel.create({
    ...req.query
  }).then(data => {
    returnClient(res, 200, 0, '添加成功!', data)
  }).catch((err) => {
    returnClient(res, 200, -1, err)
  })
}
const updateClassic = async (req, res, next) => {
  const { id } = req.query;
  const result = await WxClassicModel.find({ id });
  if (!result) {
    returnClient(res, 200, -1, '没有此项!')
    return;
  }
  await WxClassicModel.update({ id }, {
    ...req.query
  }).then((data) => {
    returnClient(res, 200, 0, '修改成功!', data)
  }).catch((err) => {
    returnClient(res, 200, -1, err)
  })
}
const queryClassic = async (req, res, next) => {
  const { page, limit } = splitParams(req.url);
  const total = await WxClassicModel.countDocuments()
  WxClassicModel.find()
    .skip(Number((page - 1) * limit))
    .limit(Number(limit))
    // .populate("parent")
    .then((data) => {
      returnClient(res, 200, 0, "获取成功", { data, total });
    })
    .catch((err) => {
      returnClient(res, 200, -1, err);
    });
}

module.exports = {
  createClassic,
  queryClassic,
  uploadWechat,
  updateClassic
}