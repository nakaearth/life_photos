class GroupsController < ApplicationController

  def index
    @groups = current_user.groups
  end

  def my_groups
    @groups = current_user.groups
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
    Group.transaction do
      @group = Group.new(group_params)
      if @group.save_group(current_user)
        redirect_to action: "show", id:  @group.id,  notice: 'save successful.'
      else
        render action: :new 
      end
    end
  rescue => e
    redirect_to '/500.html'
  end

  def show
    @group = Group.find(params[:id])
    @group_members = @group.group_members
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
