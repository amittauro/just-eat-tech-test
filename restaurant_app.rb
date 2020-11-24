require 'sinatra'
require 'net/http'
require 'json'
require 'pry'
require 'sinatra/json'

class RestaurantsApp < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  get '/restaurants' do
    url = "https://uk.api.just-eat.io/restaurants/bypostcode/#{session[:postcode]}"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    info = JSON.parse(response)
    json(info)
  end

  post '/restaurants' do
    puts "params: #{params}"
    session[:postcode] = params[:postcode]
  end
end
