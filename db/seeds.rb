# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all

posts = [
{
	name: "New Album",
	image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg')),
	title: "The Bad Seeds",
	date: "20.10.2020",
	content: "Tracklist"
},
{
	name: "Old Album",
	image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg')),
	title: "The Bad Seeds Old",
	date: "20.10.2020",
	content: "Some Old Tracklist"
}
]

posts.each do |post|
	postik = Post.create(post)
	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
end
