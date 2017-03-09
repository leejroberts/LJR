class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.text :technology
      t.string :image
      t.string :link
      t.string :repository

      t.timestamps
    end
  end
end
