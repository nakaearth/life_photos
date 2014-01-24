source 'https://rubygems.org'

ruby '2.1.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.2'

# 開発環境、テスト環境両方で使うもの
group :development, :test do
  gem 'sqlite3'
  # Railsコンソールの多機能版
  gem 'pry-rails'

  # pryの入力に色付け
#  gem 'pry-coolline'

  # デバッカー
  gem 'pry-byebug'

  # Pryでの便利コマンド
  gem 'pry-doc'

  # pryの色付けをしてくれる
  gem 'awesome_print'

  gem 'spring'

  # profile gem
  gem 'speed_gun'
  gem 'msgpack',  '~> 0.5.0'

end

# 開発環境のみ
group :development do
  # PryでのSQLの結果を綺麗に表示
  gem 'hirb'
  gem 'hirb-unicode'

  gem 'guard'
  gem 'guard-rspec', ' ~> 0.4.2'
  gem 'guard-spring'
  # Converter erb => haml
  gem 'erb2haml'
end

# 本番のみn設定
group :production do
  gem 'pg'
#  gem 'unicorn'
  gem 'foreman'
  gem 'thin'
  gem 'rails_12factor'
  gem 'bugsnag'
end

# profile
gem 'rack-mini-profiler'

# PG/MySQL Log Formatter
gem 'rails-flog' , :require => 'flog'

# Migration Helper
gem 'migrant'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# source map
#gem 'coffee-rails-source-maps'
#gem 'sass-rails-source-maps'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Haml
gem 'haml-rails'

#quiet assets
gem 'quiet_assets'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
# gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# pageing
gem 'kaminari'

# login
gem 'omniauth-twitter'
gem 'omniauth-facebook'
gem "omniauth-google-oauth2"

# s3
gem "paperclip"
gem "aws-s3"
gem "aws-sdk"
gem "jquery-fileupload-rails"

# test & coverage & code style
group :test do
#  gem 'rspec', '~> 3.0.0.beta1'
  gem 'rspec-rails', '~> 3.0.0.beta1'
  gem 'rake_shared_context'
  gem 'simplecov', require: false
  gem 'simplecov-rcov', require: false
  gem 'rubocop', require: false
  gem 'rubocop-checkstyle_formatter', require: false
  # fixtureの代わり
  gem "factory_girl_rails"
  gem 'shoulda-matchers'
  gem 'json_expressions'
  # テスト環境のテーブルをきれいにする
  gem 'database_rewinder'
#  gem 'io-console', '~> 0.4.2'
end

# jpmobile
gem "jpmobile"

# google calendar
gem 'fullcalendar-rails'

# active record debug
group :test, :development do
  gem 'hirb-unicode'
end

# model info 
gem 'annotate', :git =>'https://github.com/ctran/annotate_models'

# td
gem 'td'
gem 'td-logger'

# newrelic
gem 'newrelic_rpm'

gem 'active_decorator'

# AngularsJS
gem 'angular-gem'

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

# todo list generates
gem 'watson-ruby'

#setting
gem 'settingslogic'

# bower
gem 'bower-rails', '~> 0.5.0'

# cache_digest
gem 'cache_digests'

## dropbox sdk
#gem 'dropbox-sdk'

# panda stream
gem 'panda', '~> 1.6.0'

# pusher
# gem 'pusher'

# aip development
gem 'grape'
gem 'rabl'

# presenter(view helper/decorator)
gem 'draper'

# memcached client
gem 'memcachier'
gem 'dalli'


