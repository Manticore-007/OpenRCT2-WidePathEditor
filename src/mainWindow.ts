import { Colour, button, groupbox, horizontal, window } from "openrct2-flexui";

export const mainWindow = window({
    width: 105,
    height: 420,
    colours: [Colour.DarkYellow, Colour.DarkYellow],
    title: "Wide footpaths",
    content: [
        groupbox({
            text: "Type",
            padding: -1,
            content: [
                horizontal([
                    button({
                        height: 35,
                        width: 45,
                        padding: -2,
                        border: false,
                        image: 81067
                    }),
                    button({
                        height: 35,
                        width: 45,
                        padding: -2,
                        border: false,
                        image: 125651
                    }),
                ]),
                button({
                    height: 35,
                    width: 45,
                    padding: {top: 2, left: 20, bottom: 2,},
                    border: false,
                    image: 81087
                }),
            ]
        }),
        groupbox({
            text: "Direction",
            padding: -1,
            content: [
                horizontal([
                    button({
                        height: 30,
                        width: 45,
                        padding: -2,
                        border: false,
                        image: 5638
                    }),
                    button({
                        height: 30,
                        width: 45,
                        padding: -2,
                        border: false,
                        image: 5635
                    }),
                ]),      
                horizontal([
                    button({
                        height: 30,
                        width: 45,
                        padding: -2,
                        border: false,
                        image: 5637
                    }),
                    button({
                        height: 30,
                        width: 45,
                        padding: -2,
                        border: false,
                        image: 5636
                    }),
                ]),            
            ]
        }),
        groupbox({
            text: "Slope",
            padding: -1,
            content: [
                horizontal([
                    button({
                        height: 24,
                        width: 24,
                        padding: {top: -2, right: -2, bottom: -2, left: 7, },
                        border: false,
                        image: 5145
                    }),
                    button({
                        height: 24,
                        width: 24,
                        padding: -2,
                        border: false,
                        image: 5146
                    }),          
                    button({
                        height: 24,
                        width: 24,
                        padding: {top: -2, right: 7, bottom: -2, left: -2, },
                        border: false,
                        image: 5147
                    }),
                ])
            ]
        }),
        button({
            height: 90,
            width: 90,
            padding: 3,
            border: false,
            //image: 77133
        }),
        button({
            height: 24,
            width: 48,
            padding: {top: -3, right: 25, bottom: 0, left: 25, },
            border: false,
            image: 5162
        }),
        groupbox({
            content: [
                horizontal([
                    button({
                        height: 36,
                        width: 36,
                        padding: 2,
                        border: false,
                        image: 5639
                    }),
                    button({
                        height: 36,
                        width: 36,
                        padding: 2,
                        border: false,
                        image: 5640
                    }),                    
                ])                
            ]
        })
    ]
})