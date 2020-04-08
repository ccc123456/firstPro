import { Emitter } from "./event-kit";

const {ccclass, property} = cc._decorator;

export namespace ClientEvents{
    export let emitter = new Emitter();
    export let EVENT_TEST = emitter.createEvent<()=>void>();
}