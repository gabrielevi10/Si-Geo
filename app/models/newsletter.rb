class Newsletter < ApplicationRecord
    validates_presence_of :title, :description, :link, :country
end
