const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  id: { type: Number, require: true, unique: true },
  name: { type: String, require: true },
  logo: { type: String, require: true },
  base: { type: String, require: true },
  first_team_entry: { type: Number, require: true },
  world_championships: { type: Number, require: true },
  highest_race_finish: {
    position: { type: Number, require: true },
    number: { type: Number, require: true },
  },
  pole_positions: { type: Number, require: true },
  fastest_laps: { type: Number, require: true },
  president: { type: String, require: true },
  director: { type: String, require: true },
  technical_manager: { type: String, require: true },
  chassis: { type: String, require: true },
  engine: { type: String, require: true },
  tyres: { type: String, require: true },
});

module.exports = mongoose.model("Team", teamSchema);
