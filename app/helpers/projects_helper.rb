module ProjectsHelper
  
  def project_features_list
    @features_array = @project.features.split(', ')
  end
  
end
