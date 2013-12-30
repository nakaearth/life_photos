#coding: utf-8

require 'dropbox_sdk'

desc "This task is dropbox setup task"
namespace :dropbox do
  task :init => :environment do
    puts 'drop box init.'
    flow = DropboxOAuth2FlowNoRedirect.new(ENV['DROP_BOX_APP_KEY'], ENV['DROP_BOX_APP_SECRET'])
    authorize_url = flow.start
    puts '1. Go to: ' + authorize_url
    puts '2. Click "Allow" (you might have to log in first)'
    puts '3. Copy the authorization code'
    print 'Enter the authorization code here: '
    puts authorize_url
 #   code = gets.strip 
  end

  task :get_token => :environment do
    flow = DropboxOAuth2FlowNoRedirect.new(ENV['DROP_BOX_APP_KEY'], ENV['DROP_BOX_APP_SECRET'])
    flow.start()
    access_token, user_id = flow.finish(ENV['DROP_BOX_CODE'])
    puts access_token
  end

  task :transfer_s3 => :environment do
    client = DropboxClient.new(ENV['DROP_BOX_ACCESS_TOKEN'])
    root_folder = client.metadata('./Photos')
    puts "folder:" , root_folder.inspect
  end
end
