# Mail Settings
ActionMailer::Base.smtp_settings = {
  :user_name => "wvm2009",
  :password => "Wi11iam!",
  :domain => "wvm-dev.com",
  :address => "smtp.sendgrid.net",
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}

# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Portfolio::Application.initialize!
