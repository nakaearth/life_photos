threads 8,32
workers 3
preload_app!

on_worker_boot do
  ActiveSupport.on_load(:active_record) do
    ActiveRecord::Base.establish_connection
  end
end

#root = "."
#bind 'unix:///tmp/puma.sock'
#pidfile "#{root}/tmp/pid"
#state_path "#{root}/tmp/state"
#activate_control_app

