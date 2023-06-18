const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  id: { type: Number, require: true, unique: true },
  name: { type: String, require: true },
  abbr: { type: String, require: true },
  image: { type: String, require: true },
  nationality: { type: String, require: true },
  country: {
    name: { type: String, require: true },
    code: { type: String, require: true },
  },
  birthdate: { type: Date, require: true },
  birthplace: { type: String, require: true },
  number: { type: Number, require: true },
  grands_prix_entered: { type: Number, require: true },
  world_championships: { type: Number, require: true },
  podiums: { type: Number, require: true },
  highest_race_finish: {
    position: { type: Number, require: true },
    number: { type: Number, require: true },
  },
  highest_grid_position: { type: Number, require: true },
  career_points: { type: String, require: true },
  teams: [
    {
      season: { type: Number, require: true },
      team: {
        type: Schema.Types.ObjectId,
        ref: "Team",
      },
    },
  ],
});

module.exports = mongoose.model("Driver", driverSchema);
