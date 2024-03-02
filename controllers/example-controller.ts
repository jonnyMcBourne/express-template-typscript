import {response, request} from "express"

const getExample = (req = request, res = response) => {
    res.json({ message: 'example' });
}

module.exports = { getExample };