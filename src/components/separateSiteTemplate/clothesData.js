
function img(root,name){
    return `https://raw.githubusercontent.com/GIGIsOtherStuff/clothingMedia/main/${root}/${name}.png`
}

export const womenClothes = [
    {
        id: 1,
        name: 'Skirts',
        img1: img('women','skirt1'),
        img2: img('women','skirt2'),
    },
    {
        id: 2,
        name: 'Bras',
        img1: img('women','bra1'),
        img2: img('women','bra2'),
    },
    {
        id: 3,
        name: 'Birkins',
        img1: img('women','birkin1'),
        img2: img('women','birkin2'),
    },
    {
        id: 4,
        name: 'Accessory',
        img1: img('women','accesory1'),
        img2: img('women','accesory2'),
    },
    {
        id: 5,
        name: 'Dresses',
        img1: img('women','dress1'),
        img2: img('women','dress2'),
    },
    {
        id: 6,
        name: 'Blouses',
        img1: img('women','blouse1'),
        img2: img('women','blouse2'),
    },
    {
        id: 7,
        name: 'Jumpsuits',
        img1: img('women','jumpsuit1'),
        img2: img('women','jumpsuit2'),
    },
    {
        id: 8,
        name: 'Leggings',
        img1: img('women','leggings1'),
        img2: img('women','leggings2'),
    }
];

export const categories = [
    {
        id: 1, 
        name: 'Hats',
    },
    {
        id: 2,
        name: 'Jackets',
    },
    {
        id: 3,
        name: 'Sneakers',
    },
    {
        id: 4,
        name: 'Womens',
        img: img('categories','womenHeader'),
    },
    {
        id: 5,
        name: 'Mens',
    },
]