class StartupController < ApplicationController
  def index
  	@image_names = ['configuration', 'management', 'operations', 'network', 'migration', 'deployment', 'database', 'dbwh', 'uxui', 'webdev', 'education', 'literature']
  end
end
