#!/usr/bin/env -S deno --allow-net --allow-read

// @ts-ignore
import pogo from 'https://deno.land/x/pogo/main.ts';

// @ts-ignore
import {HookController} from "./requests/HookController.ts";
import {RequestHandler} from "./RequestHandler.ts";

const server = pogo.server({port: 8000});

// requestHandler.addController(new HookController());

server.route({method: 'GET', path: '/'}, () => RequestHandler.response(
	new HookController()
));
server.route({method: 'GET', path: '/hook'}, () => 'Hello, Hook!');

server.start();
