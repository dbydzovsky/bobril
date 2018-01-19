import * as b from 'bobril'
import * as bs from 'bobrilStrap'
import {create as h2} from './h2'

export interface IData {
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.className = "container";
        me.style = { minHeight: 600, width:"70%", backgroundColor: "", marginTop: 20,

        };
        me.children = [
            h2({text: "Trendy"}),

            bs.Row({}, [
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({ src: "assets/img2.jpg" }))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({src: "assets/img.jpg" }))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({ src: "assets/img2.jpg" }))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({ src: "assets/img.jpg"}))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({ src: "assets/img2.jpg" }))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({src: "assets/img.jpg" }))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({ src: "assets/img.jpg" }))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({ src:"assets/img.jpg" }))
                ]),
                bs.Col({ cols: [{ size: bs.Size.Sm, span: 6 }, { size: bs.Size.Md, span: 4 }] }, [
                    bs.A({ href: '...', style: bs.helpers.thumbnail }, bs.Image({ src:"assets/img.jpg" }))
                ]),
            ])

        ]
    }
});