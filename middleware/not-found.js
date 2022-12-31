const notFound = (req, res) => res.status(404).send("Routes Does Not Exists");

module.exports = notFound;
