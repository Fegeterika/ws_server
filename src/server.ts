// server.ts
/**
 * server.ts contains code for websocket server implementation
 */
import type {Server, IncomingMessage} from "http";
import type {Duplex} from "stream";

/**
 * WebsocketServer acts as an addon to the node http server and manages websocket connections
 * by listening to `upgrade` events and initiating websocket conversion upon event firings.
 *
 * @param svr An instance of {@link http.Server} to attach WebsocketServer to
 */
export default class WebsocketServer {
  private server: Server;
  constructor(svr: Server) {
    this.server = svr
  }

  get port(): number {
    return this.port;
  }

  /**
   * Attach to the http server's `upgrade` event stream to detect incoming websocket connections
   * and perform protocol upgrade if applicable.
   */
  start() {
    this.server.on('upgrade', (req: IncomingMessage, socket: Duplex, head: Buffer) => {
      console.log("Websocket received");
    });
  }
}
