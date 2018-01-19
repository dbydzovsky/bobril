import * as b from 'bobril';
import * as homePage from './pages/HomePage';
import * as trendyPage from './pages/TrendyPage';

b.asset("assets/bootstrap.min.css");

export const img = b.asset("assets/img.jpg");
export const img2 = b.asset("assets/img2.jpg");

export interface IData {
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}


export const create = b.createComponent<IData>({
    id: "trendy",
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            {
                className: "wrapper",
                children: [ "Ahoj"
                    //header(),
                    //panel(),
                    //footer(),
                ]
            }
        ];
        me.data.activeRouteHandler()
    }
});


b.routes(
    b.route({handler: homePage.create }, [
        b.route( {handler: trendyPage.create, url: '/', name: '/'  }),
        b.route({ name: 'trendy', handler: trendyPage.create }),
        b.routeDefault({handler: homePage.create})
    ])
);