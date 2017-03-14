# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

manup = Project.create( name: 'ManUp',
                 description: "ManUp is a group based men's event app",
                    features: 'Groups geocoded and searchable by location, mobile responsive views, comprehensive test suite',
                  technology: 'Rails 5.0, ruby 2.3',
                       image: 'man-up.png')
