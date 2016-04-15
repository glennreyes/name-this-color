// eslint-disable-next-line react/require-render-return
import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

const app = new Express();
const port = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Name this Color</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/static/app.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, error => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    // eslint-disable-next-line no-console
    console.info('The express server is running at http://localhost:%s\n', port);
  }
});
