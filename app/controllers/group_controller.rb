class GroupController < ApplicationController

  def index
    @groups = Group.all 
    @groups.to_json
  end


  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
