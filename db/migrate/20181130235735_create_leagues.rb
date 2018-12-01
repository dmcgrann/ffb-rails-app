class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name
      t.string :scoring_style
      t.string :draft_style

      t.timestamps
    end
  end
end
