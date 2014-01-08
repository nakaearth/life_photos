class GroupsController < ApplicationController

  def index
    @groups = current_user.groups
  end

  def my_groups
    @groups = current_user.groups
    @groups.to_json
    render json: @groups, status: 201
  end

  def new
#    redirect_to action: "new", controller: "albums", notice: 'グループ作成の前に先にアルバムを登録してください' unless Album.where(user_id: current_user.id).exists?
    @group = Group.new
  end

  def create
    Group.transaction do
      @group = Group.new(group_params)
      if @group.save_group(current_user)
        redirect_to action: :new, controller: :albums if params[:from_url] == 'album'
        redirect_to action: "show", id:  @group.id,  notice: 'save successful.' unless params[:from_url] == 'album'
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
