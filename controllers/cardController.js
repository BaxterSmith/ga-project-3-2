const Card = require('../models/Card.js');

const cardController = {
    index: (req, res) => {
        Card.find().then((cards) => {
            res.json(cards)
        });
    },
    create: (req, res) => {
        Card.create(req.body).then(card => {
            card.save()
            res.redirect('/');
        });
    },
    show: (req, res) => {
        let cardId = req.params.cardId;
        Card.findById(cardId).then(card => {
            res.json(card)
        });
    },
    edit: (req, res) => {
        Card.findById(req.params.cardId).then(card => {
            res.json(card)
        });
    },
    update: (req, res) => {
        Card.findByIdAndUpdate(req.params.cardId, req.body, {new: true}).then((card) => {
            res.json(card);
        });
    },
    delete: (req, res) => {
        Card.findByIdAndDelete(req.params.cardId).then(() => {
            res.redirect('/');
        });
    }
};

module.exports = cardController;