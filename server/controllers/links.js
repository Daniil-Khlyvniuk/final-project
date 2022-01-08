const Link = require("../models/Link");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addLinks = (req, res, next) => {
  const linksData = _.cloneDeep(req.body);
  const newLinks = new Link(queryCreator(linksData));
  try {
    newLinks
      .save()
      .then((links) => res.json(links))
      .catch((err) =>
        res.status(400).json({
          message: `Oooops... Server error`,
        })
      );
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.updateLinks = (req, res, next) => {
  try {
    Link.findOne({ _id: req.params.id })
      .then((links) => {
        if (!links) {
          return res.status(400).json({
            message: `Links with _id "${req.params.id}" is not found.`,
          });
        } else {
          const linksData = _.cloneDeep(req.body);
          const updatedLinks = queryCreator(linksData);

          Link.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updatedLinks },
            { new: true }
          )
            .then((links) => res.json(links))
            .catch((err) =>
              res.status(400).json({
                message: `Oooops... Server error`,
              })
            );
        }
      })
      .catch((err) =>
        res.status(400).json({
          message: `Oooops... Server error`,
        })
      );
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};
exports.deleteLinks = (req, res, next) => {
  try {
    Link.findOne({ _id: req.params.id }).then(async (links) => {
      if (!links) {
        return res
          .status(400)
          .json({ message: `List with _id "${req.params.id}" is not found.` });
      } else {
        const linksToDelete = await Link.findOne({ _id: req.params.id });

        Link.deleteOne({ _id: req.params.id })
          .then((deletedCount) =>
            res.status(200).json({
              message: `Links witn title "${linksToDelete.title}" is successfully deletes from DB. `,
            })
          )
          .catch((err) =>
            res.status(400).json({
              message: `Oooops... Server error`,
            })
          );
      }
    });
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.getLinks = (req, res, next) => {
  try {
    Link.find()
      .then((links) => res.json(links))
      .catch((err) =>
        res.status(400).json({
          message: `Oooops... Server error`,
        })
      );
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.getLink = (req, res, next) => {
  try {
    Link.findOne({ _id: req.params.id })
      .then((links) => res.json(links))
      .catch((err) =>
        res.status(400).json({
          message: `Oooops... Server error`,
        })
      );
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};
