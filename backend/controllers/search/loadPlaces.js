const loadPlaces = async (req, res) => {
   console.log("reached here")
   res.status(200).json({
      message: "Places loaded successfully",})
};

module.exports = { loadPlaces };
