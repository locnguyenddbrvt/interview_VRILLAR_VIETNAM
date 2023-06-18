const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverTopSchema = new Schema({
  year: { type: String, require: true, unique: true },
  data: [
    {
      position: { type: Number, require: true },
      driver: { type: Schema.Types.ObjectId, ref: "Driver" },
      team: { type: Schema.Types.ObjectId, ref: "Team" },
    },
  ],
});

module.exports = mongoose.model("DriverTop", driverTopSchema);
