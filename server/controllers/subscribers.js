const Subscriber = require("../models/Subscriber");
const sendMail = require("../commonHelpers/mailSender");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addSubscriber = (req, res, next) => {
  try {
    if (!req.body.letterSubject || !req.body.letterHtml) {
      res.status(400).json({
        message:
          "Subject (letterSubject) and content (letterHtml) is required.",
      });

      return;
    }

    const subscriberMail = req.body.email;
    const letterSubject = req.body.letterSubject;
    const letterHtml = req.body.letterHtml;

    if (!letterSubject) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
      });
    }

    if (!letterHtml) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
      });
    }

    Subscriber.findOne({ email: req.body.email }).then((subscriber) => {
      if (subscriber && subscriber.enabled) {
        return res.status(400).json({
          message: `Subscriber with email "${subscriber.email}" is already exists`,
        });
      } else if (subscriber && !subscriber.enabled) {
        const initialQuery = _.cloneDeep(req.body);
        const updatedSubscriber = queryCreator(initialQuery);
        updatedSubscriber.enabled = true;

        Subscriber.findOneAndUpdate(
          { email: req.body.email },
          { $set: updatedSubscriber },
          { new: true }
        )
          .then(async (subscriber) => {
            const mailResult = await sendMail(
              subscriberMail,
              letterSubject,
              letterHtml,
              res
            );
            res.json({
              subscriber,
              mailResult,
            });
          })
          .catch((err) =>
            res.status(400).json({
              message: `Oooops... Server error`,
            })
          );
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const newSubscriber = new Subscriber(queryCreator(initialQuery));

        newSubscriber
          .save()
          .then(async (subscriber) => {
            const mailResult = await sendMail(
              subscriberMail,
              letterSubject,
              letterHtml,
              res
            );

            res.json({
              subscriber,
              mailResult,
            });
          })
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

exports.updateSubscriberById = (req, res, next) => {
  const subscriberMail = req.body.email;
  const letterSubject = req.body.letterSubject;
  const letterHtml = req.body.letterHtml;
  try {
    if (!letterSubject) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
      });
    }

    if (!letterHtml) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
      });
    }

    Subscriber.findOne({ _id: req.params.id })
      .then((subscriber) => {
        if (!subscriber) {
          return res.status(400).json({
            message: `Subscriber with _id "${req.params.id}" is not found.`,
          });
        } else {
          const initialQuery = _.cloneDeep(req.body);
          const updatedSubscriber = queryCreator(initialQuery);

          Subscriber.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updatedSubscriber },
            { new: true }
          )
            .then(async (subscriber) => {
              const mailResult = await sendMail(
                subscriberMail,
                letterSubject,
                letterHtml,
                res
              );

              res.json({
                subscriber,
                mailResult,
              });
            })
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

exports.updateSubscriberByEmail = (req, res, next) => {
  const subscriberMail = req.params.email;
  const letterSubject = req.body.letterSubject;
  const letterHtml = req.body.letterHtml;

  try {
    if (!letterSubject) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
      });
    }

    if (!letterHtml) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
      });
    }

    Subscriber.findOne({ email: req.params.email })
      .then((subscriber) => {
        if (!subscriber) {
          return res.status(400).json({
            message: `Subscriber with _id "${req.params.email}" is not found.`,
          });
        } else {
          const initialQuery = _.cloneDeep(req.body);
          const updatedSubscriber = queryCreator(initialQuery);

          Subscriber.findOneAndUpdate(
            { email: req.params.email },
            { $set: updatedSubscriber },
            { new: true }
          )
            .then(async (subscriber) => {
              const mailResult = await sendMail(
                subscriberMail,
                letterSubject,
                letterHtml,
                res
              );

              res.json({
                subscriber,
                mailResult,
              });
            })
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
  } catch (err) {}
};

exports.getSubscribers = (req, res, next) => {
  Subscriber.find()
    .then((subscribers) => res.json(subscribers))
    .catch((err) =>
      res.status(400).json({
        message: `Oooops... Server error`,
      })
    );
};

exports.getSubscriber = (req, res, next) => {
  Subscriber.findOne({ email: req.params.email })
    .then((subscriber) => {
      if (!subscriber) {
        return res.status(400).json({
          message: `Subscriber with _id "${req.params.email}" is not found.`,
        });
      } else {
        res.json(subscriber);
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Oooops... Server error`,
      })
    );
};
