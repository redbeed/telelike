// @ts-ignore
import {RequestController} from "./requests/RequestController.ts";

// @ts-ignore
import {ServerRequest} from "https://deno.land/std/http/server.ts";

export class RequestHandler {
	static response(controller: RequestController) {
		return controller.response()
	}
}
