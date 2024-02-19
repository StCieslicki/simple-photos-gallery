import * as express from 'express';
import * as compression from 'compression';
import * as apicache from 'apicache';

const app = express();
app.use(compression());
const cache = apicache.middleware;

app.use(cache('1 day'));

console.log(__dirname);
app.use(express.static(__dirname + '/../public'));

const port = 3333;

app.use('/', express.static(__dirname + '/../public', {index: "index.html"}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
