# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

geojson = ""
File.open(Rails.root.join("public/mundo.geojson"), "r") do |f|
    f.each_line do |line|
        geojson << line
    end
end   

json = JSON.parse(geojson)

Shape.create(geojson: json)
geojson = ""

File.open(Rails.root.join("public/estados_br.geojson"), "r") do |f|
    f.each_line do |line|
        geojson << line
    end
end 

json = JSON.parse(geojson)

Shape.create(geojson: json)