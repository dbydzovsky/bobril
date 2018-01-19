import * as b from 'bobril'
import {create as HeaderField} from "./headerField";

export interface IData {
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.className = "container-fluid";
        me.style = {
            backgroundColor: "#103F54", minHeight: 300

        };
        me.children = [
           // login(),
            HeaderField(),
        ]
    }
});