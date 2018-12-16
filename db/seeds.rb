# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# players = Player.create([{first_name: "Tom", last_name: "Brady", position: "QB", nfl_team: "NE"},
#   {first_name: "Aaron", last_name: "Rodgers", position: "QB", nfl_team: "GB"},
#   {first_name: "Saquon", last_name: "Barkley", position: "RB", nfl_team: "NYG"},
#   {first_name: "Antonio", last_name: "Brown", position: "WR", nfl_team: "PIT"},
#   {first_name: "Melvin", last_name: "Gordon", position: "RB", nfl_team: "LAC"}])

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'ffb_seed_data.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  p = Player.new
  p.player_name = row['player_name']
  p.position = row['position']
  p.nfl_team = row['nfl_team']
  p.save
end
puts "There are now #{Player.count} rows in the transactions table"
