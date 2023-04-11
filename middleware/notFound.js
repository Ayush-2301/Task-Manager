const notFound = (req, res) => res.status(404).send("Request unavailable");
module.exports = notFound;
