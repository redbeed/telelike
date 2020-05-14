// @ts-ignore
import {RequestController} from "./RequestController.ts";

export class HookController implements RequestController {
	response(): any {
		return 'Im a hook!';
	}
}
