# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
players = Player.create([{first_name: "Tom", last_name: "Brady", position: "QB", nfl_team: "NE"},
  {first_name: "Aaron", last_name: "Rodgers", position: "QB", nfl_team: "GB"},
  {first_name: "Saquon", last_name: "Barkley", position: "RB", nfl_team: "NYG"},
  {first_name: "Antonio", last_name: "Brown", position: "WR", nfl_team: "PIT"},
  {first_name: "Melvin", last_name: "Gordon", position: "RB", nfl_team: "LAC"}])
