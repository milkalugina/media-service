# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all
Post.destroy_all

puts "Destroyed everything you touch"

# posts = [
# {
# 	name: "животные",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-1.jpg')),
# 	title: "«Знакомство с приютом» возвращается!",
# 	content: "В субботу, 17 октября, мы вновь приглашаем всех желающих принять участие в поездке в приют «Некрасовка». Опытные волонтеры проведут экскурсию по приюту, познакомят со своими подопечными и расскажут, как правильно общаться с кошками и собаками",
#   date: "20.10.2020"
# },
# {
# 	name: "малоимущие",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-2.png')),
# 	title: "Как решить проблему бездомных в московских подъездах?",
# 	content: "Если в вашем подъезде бездомный, ему можно предложить еду, помощь соцработника («Социальный патруль» в Москве, 8 (499) 357-01-80), а после спросить: «Могу ли я чем-то еще помочь?»",
#   date: "19.10.2020"
# },
# {
# 	name: "экология",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-3.jpg')),
# 	title: "«Реки без границ»",
# 	content: "В Сибири экологи выявили 78 фактов загрязнения рек там, где работают золотодобывающие предприятия, рассказал «Интерфаксу» эксперт WWF, координатор экологической коалиции «Реки без границ» Александр Колотов",
#   date: "19.10.2020"
# },
# {
# 	name: "интернат",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-4.jpg')),
# 	title: "И так нормально",
# 	content: "Во время пандемии психоневрологические интернаты закрылись на режим обсервации. Анастасия Дерюгина две недели проработала волонтером в отделении
# для молодых людей от 18 до 26 лет",
#   date: "18.10.2020"
# },
# {
# 	name: "экология",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-5.jpg')),
# 	title: "«Нам есть чему поучиться у деревьев». Что такое экологичный дом и как строить без вреда природе?",
# 	content: "Интернет леса, застенчивость кроны и взаимовыручка деревьев",
#   date: "17.10.2020"
# },
# {
# 	name: "жертвы насилия",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-6.jpg')),
# 	title: "«Если ваши скрепы не выдержат феминизм, грош им цена». Монолог журналистки из Дагестана, которая помогает жертвам насилия",
# 	content: "Журналистка помогает жертвам семейного насилия на Кавказе",
#   date: "17.10.2020"
# },
# {
# 	name: "мосволонтер",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-7.jpg')),
# 	title: "Начинаются осенние волонтерские сборы «Бутовский полигон 2020»",
# 	content: "Добровольцы приведут в достойный вид территории захоронений жертв политических репрессий",
#   date: "16.10.2020"
# },
# {
# 	name: "инвалидность",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-8.jpg')),
# 	title: "В Москве пройдет одиннадцатый Международный благотворительный фестиваль «Белая трость»",
# 	content: "Участниками фестиваля станут дети с ограниченными возможностями здоровья",
#   date: "15.10.2020"
# },
# {
# 	name: "малоимущие",
# 	image: File.open(Rails.root.join('public', 'images', 'pic-9.jpg')),
# 	title: "Делаем добро вместе: Фонд продовольствия «Русь» ищет добровольцев",
# 	content: "У тебя есть замечательная возможность помочь в фасовке благотворительных продуктовых наборов для нуждающихся",
#   date: "15.10.2020"
# },
#
# ]
#
# posts.each do |post|
# 	postik = Post.create(post)
# 	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
# end
