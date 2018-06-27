class CreateNewsletters < ActiveRecord::Migration[5.2]
  def change
    create_table :newsletters do |t|
      t.string :title
      t.text :description
      t.string :link
      t.string :country
      t.string :state

      t.timestamps
    end
  end
end
