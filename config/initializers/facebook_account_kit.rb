 require 'facebook/account_kit'

  Facebook::AccountKit.config do |c|
    c.account_kit_version = 'v2.7' # or any other valid account kit api version
    c.account_kit_app_secret = '2f0d425eca96caee5512139c963eb662'
    c.facebook_app_id = '879770172154262'
  end