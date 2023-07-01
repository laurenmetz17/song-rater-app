# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listener.create(name: "Lauren Metz", username: "laurenmetz17", password: "password", password_confirmation: "password")
Song.create(title: "Monte Carlo", artist: "Remi Wolf", duration: "3:15")
Rating.create(review: 5, comment: "upbeat song for the summer", song_id:1, listener_id:1)