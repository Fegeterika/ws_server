import {Server as staticServer} from "node-static";
import * as http from "http";
import WebsocketServer from "./server";

const fileServer = new staticServer('./dist/');
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // Attach a default listener for `end` event, so we can serve a test page
  req.addListener('end', () => {
    fileServer.serve(req, res);
  }).resume();
});

console.log("Attaching websocket server to the http server");
const wsServer = new WebsocketServer(server);
wsServer.start();

console.log("listening now");
server.listen(8000);
