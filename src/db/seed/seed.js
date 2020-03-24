const Product = require('../models/product');
const Category = require('../models/category');

require('../database');

// create categories
// new Category({ name: 'CPU' }).save();
// new Category({ name: 'GPU' }).save();

// create products
new Product({
    name: 'Ryzen ThreadRipper 3970X',
    description: 'The World’s Most Powerful 32-Core Desktop Processor, Do everything. All at the same time. Render. Stream. Compile. Encode. Work and Play. It’s the ultimate desktop platform for creators, featuring the world’s most powerful desktop processors.',
    price: 27000,
    cat: 'CPU'
}).save()

new Product({
    name: 'RYZEN 7 3800X',
    description: '8-Core 3.9 GHz (4.5 GHz Max Boost) Socket AM4 105W 100-100000025BOX Desktop Processor',
    price: 449,
    cat: 'CPU'
}).save()

new Product({
    name: 'Intel Core i9-9900K',
    description: ' 8-Core, 16-Thread, 3.6 GHz (5.0 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I99900K Desktop Processor Intel UHD Graphics 630',
    price: 699,
    cat: 'CPU'
}).save()

new Product({
    name: 'Intel Core i7-9700K',
    description: '8-Core 3.6 GHz (4.9 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I79700K Desktop Processor Intel UHD Graphics 630',
    price: 529,
    cat: 'CPU'
}).save()

new Product({
    name: 'Intel Core i5-9600K',
    description: '6-Core 3.7 GHz (4.6 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I59600K Desktop Processor Intel UHD Graphics 630',
    price: 299,
    cat: 'CPU'
}).save()

new Product({
    name: 'Intel Core i5-8600K',
    description: '6-Core 3.6 GHz (4.3 GHz Turbo) LGA 1151 (300 Series) 95W BX80684I58600K Desktop Processor Intel UHD Graphics 630',
    price: 349,
    cat: 'CPU'
}).save()

new Product({
    name: 'MSI GeForce RTX 2070',
    description: 'SUPER DirectX 12 RTX 2070 Super GAMING X 8GB 256-Bit GDDR6 PCI Express 3.0 x16 HDCP Ready SLI Support Video Card',
    price: 799,
    cat: 'GPU'
}).save()

new Product({
    name: 'GIGABYTE Radeon RX 570',
    description: 'DirectX 12 GV-RX570GAMING-4GD REV2.0 4GB 256-Bit GDDR5 PCI Express 3.0 x16 ATX Video Card',
    price: 179,
    cat: 'GPU'
}).save()

new Product({
    name: 'MSI GeForce GTX 1660',
    description: 'DirectX 12 GTX 1660 VENTUS XS 6G OC 6GB 192-Bit GDDR5 PCI Express 3.0 x16 HDCP Ready Video Card',
    price: 249,
    cat: 'GPU'
}).save()

new Product({
    name: 'EVGA GeForce RTX 2080 TI',
    description: 'DirectX 12 11G-P4-2281-KR 11GB 352-Bit GDDR6 PCI Express 3.0 HDCP Ready SLI Support BLACK EDITION GAMING Video Card, Dual HDB Fans & RGB LED',
    price: 1548,
    cat: 'GPU'
}).save()

