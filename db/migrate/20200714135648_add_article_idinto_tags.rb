class AddArticleIdintoTags < ActiveRecord::Migration[6.0]
  def change
    add_column :tags, :article_id, :integer
  end
end
