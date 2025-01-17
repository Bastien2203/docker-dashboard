require 'sinatra'
require 'docker'
require 'yaml'


Docker.url = 'unix:///var/run/docker.sock'

get '/' do
  content_type :json
  Docker.version.to_json
end


get '/containers' do
  headers 'Access-Control-Allow-Origin' => '*'
  content_type :json
  containers = Docker::Container.all(all: true)
  containers.map do |container|
    {
      id: container.id,
      name: container.info['Names'].first,
      image: container.info['Image'],
      image_id: container.info['ImageID'],
      command: container.info['Command'],
      created: container.info['Created'],
      state: container.info['State'],
      status: container.info['Status'],
      ports: container.info['Ports'],
      #labels: container.info['Labels'],
      #size_rw: container.info['SizeRw'],
      #size_root_fs: container.info['SizeRootFs'],
      host_config: container.info['HostConfig'],
      network_settings: container.info['NetworkSettings'],
      mounts: container.info['Mounts']
      
    }
  end.to_json
end


## get all docker-compose in /usr/src/services
get '/services' do 
  headers 'Access-Control-Allow-Origin' => '*'
  content_type :json
  services = Dir.glob('/usr/src/services/*')
  services.map do |service|
    docker_compose = File.read("#{service}/docker-compose.yml")
    {
      name: service.split('/').last,
      docker_compose: YAML.load(docker_compose)
    }
  end.to_json
end

post '/containers/:id/start' do
  headers 'Access-Control-Allow-Origin' => '*'
  container = Docker::Container.get(params[:id])
  container.start
  container.info.to_json
end

post '/containers/:id/stop' do
  headers 'Access-Control-Allow-Origin' => '*'
  container = Docker::Container.get(params[:id])
  container.stop
  container.info.to_json
end
