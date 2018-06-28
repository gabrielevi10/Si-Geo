ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
  :address              =>  'smtp.sendgrid.net',
  :port                 =>  '8080',
  :authentication       =>  :plain,
  :user_name            =>  'app100516704@heroku.com',
  :password             =>  'fu1dtnhp8439',
  :domain               =>  'heroku.com',
  :enable_starttls_auto  =>  true
}
