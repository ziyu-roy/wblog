class Admin::ChangeLogsController < Admin::BaseController
  before_action :set_change_log, only: [:show, :edit, :update, :destroy]

  def index
    @change_logs = ChangeLog.order(created_at: :desc).page(params[:page]).per(25)
  end

  def show
  end

  def new
    @change_log = ChangeLog.new
  end

  def edit
  end

  def create
    @change_log = ChangeLog.new(change_log_params)

    if @change_log.save
      flash[:notice] = '创建更新日志成功'
      redirect_to admin_change_logs_path
    else
      flash.now[:error] = '创建失败'
      render :new, status: 422
    end
  end

  def update
    if @change_log.update(change_log_params)
      flash[:notice] = '更新日志更新成功'
      redirect_to admin_change_logs_path
    else
      flash[:error] = '更新日志失败'
      render :edit
    end
  end

  def destroy
    if @change_log.destroy
      flash[:notice] = '删除更新日志成功'
      redirect_to admin_change_logs_path
    else
      flash[:error] = '删除更新日志失败'
      redirect_to admin_change_logs_path
    end
  end

  private

  def set_change_log
    @change_log = ChangeLog.find(params[:id])
  end

  def change_log_params
    params.require(:change_log).permit(:title, :content)
  end
end