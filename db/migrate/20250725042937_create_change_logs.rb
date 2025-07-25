class CreateChangeLogs < ActiveRecord::Migration[7.1]
  def change
    create_table :change_logs do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
