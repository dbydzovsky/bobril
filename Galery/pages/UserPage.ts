import * as b from 'bobril'
import {create as header} from "../components/header"
import {create as footer} from "../components/footer"
import {create as panel} from "../components/panel"

export interface IData {
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    id: "UserPage",
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            "UserPage",
        ];
    }
});