module.exports = whiteList => {
  return {
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    origin: function(origin, callback) {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  };
};
