class ChangeLogsController < ApplicationController
  def index
    @change_logs = ChangeLog.recent.page(params[:page]).per(10)
  end
end