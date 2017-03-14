class ProjectsController < ApplicationController
  
  def index
    @projects = Project.all
  end
  
  def show
    @project = Project.first
  end
end
