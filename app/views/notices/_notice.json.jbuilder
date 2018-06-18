json.extract! notice, :id, :title, :description, :link, :created_at, :updated_at
json.url notice_url(notice, format: :json)
