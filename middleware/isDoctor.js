module.exports = function isAdmin(req, res, next) {
    if (req.user.user.role !== "doctor") {
      return res.status(403).send('Access Denied')
    }
  
    next()
  }
  