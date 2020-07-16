json.articles @articles do |v| 
  json.partial! "article", obj: v 
end