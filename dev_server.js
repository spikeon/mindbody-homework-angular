process.env.UV_THREADPOOL_SIZE = 100;

var WebpackDevServer    = require("webpack-dev-server");
var webpack             = require("webpack");
var config              = require("./config/webpack.dev");
var compiler            = webpack(config);

var server              = new WebpackDevServer(compiler, {
	historyApiFallback: true,
	setup : function(app){}
});

server.listen(17681);