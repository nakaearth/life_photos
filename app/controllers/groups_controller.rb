class GroupsController < ApplicationController

  def index
    @groups = Group.all 
    @groups.to_json
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @groups }
    end
  end


  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to @group, notice: 'save successful.'
    else
      render action: :new 
    end
  end

  def show
    @group = Group.find(params[:id])
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
  end

  def destroy
  end

  private
  def group_params
    params.require(:group).permit(:name) 
  end 

end
