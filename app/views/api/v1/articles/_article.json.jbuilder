json.id obj.id
json.tags obj.tags do |tag|
  json.id tag.id
  json.content tag.content
end

json.title obj.title
json.content obj.content
json.author do 
  json.id obj.user.id
  json.name obj.user.name
end