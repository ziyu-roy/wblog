class ChangeLog < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :content, presence: true, length: { minimum: 3 }

  # Order by most recent first for display
  scope :recent, -> { order(created_at: :desc) }

  # Get formatted creation date for display
  def formatted_date
    created_at.strftime('%Y年%m月%d日')
  end
end