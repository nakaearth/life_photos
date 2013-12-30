#coding: utf-8
$:.unshift(File.dirname(__FILE__))

require 'dropbox_sdk'

module Dropbox 
  class Transfer
    def setup
      flow = DropboxOAuth2FlowNoRedirect.new(ENV['DROP_BOX_APP_KEY'], ENV['DROP_BOX_APP_SECRET'])
      authorize_url = flow.start
      puts '1. Go to: ' + authorize_url
      puts '2. Click "Allow" (you might have to log in first)'
      puts '3. Copy the authorization code'
      print 'Enter the authorization code here: '
      code = gets.strip 
      access_token, user_id = flow.finish(code)
      @client = DropboxClient.new(access_token, :dropbox)
    end

    def transfer_s3
      root_folder = @client.metadata('/')
      puts "folder:" , root_folder.inspect
      # file = @client.get_file_and_metadata('../../')
    end
  end
end

@dropbox = Dropbox::Transfer.new
@dropbox.setup

@dropbox.transfer_s3

