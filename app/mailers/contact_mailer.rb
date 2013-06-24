class ContactMailer < ActionMailer::Base
  default from: "anybody@example.com"
  
  def first_contact(contact_name, contact_email, content)
    @name = contact_name
    @email = contact_email
    @content = content
    
    mail(to: "wvmitchell@gmail.com", subject: "Someone is trying to get in touch!")
  end
end
