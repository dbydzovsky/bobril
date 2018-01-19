import * as b from 'bobril';
import * as bs from 'bobrilstrap';
import * as trendy from '../pages/TrendyPage'
import * as Link from "./link";

export interface IData {
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.className = "container";
        me.style = { minHeight: 50, fontSize: 18, width: "50%",  fontFamily: "Georgia", textAlign: "center"

        };
        me.children = [

            bs.Pills({style:{}},  [
                bs.Pill({}, bs.A({ href: '#/' }, 'Home')),
                bs.Pill({}, bs.A({ href: '#/trendy', id: 'trendy', name: 'trendy'}, "Trendy")),
                bs.Pill({}, bs.A({ href: '#/gallery' }, 'Gallery')),
                bs.Pill({}, bs.A({ href: '#/user' }, 'User')),
                bs.Pill({}, bs.A({ href: '#/login'}, 'Login')),
            ])
        ]
    }
});
