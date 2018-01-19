import * as b from 'bobril';
import * as homePage from './pages/HomePage';
import * as wrapperPage from './pages/WrapperPage';
import * as trendyPage from './pages/TrendyPage';
import * as loginPage from './pages/LoginPage';
import * as userPage from './pages/UserPage';
import * as galleryPage from './pages/GalleryPage';

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


b.routes([
    b.route( {handler: loginPage.create, url: "/login", name: "login"}),
    b.route({handler: wrapperPage.create, url: "/" }, [
        b.route( { handler: trendyPage.create, url: '/trendy', name: 'trendy'  }),
        b.route({ name: 'gallery', url: '/gallery', handler: galleryPage.create }),
        b.route({ name: 'userpage', url: '/user', handler: userPage.create }),
        b.routeDefault({handler: homePage.create})
    ])
]);