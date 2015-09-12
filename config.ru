use Rack::Static,
  :urls => ["/app", "/bower_components"],
  :root => "./"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('app/index.html', File::RDONLY)
  ]
}