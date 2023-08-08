const zapasNike= [{
    id: 1,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjZLpaoMD57ex0o13ZcdPFthedb4br9UdQA&usqp=CAU",
    nombre: "NIKE MALONE 1998 ",
    precio: 68000,
    talle : 44
},
{
    id: 2,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2ycicgpxf9UEnp65AYNAzFXSetDM5xHlWULJP9hwq5Xwm4IiVzGDmPqfePGUb5HCthI&usqp=CAU",
    nombre: "NIKE HIGH JUMP CLASSIC VINTAGE",
    precio: 77000,
    talle : 46
},
{
    id: 3,
    foto: "https://cdn-images.farfetch-contents.com/16/65/74/03/16657403_32619235_1000.jpg",
    nombre: "NIKE LOW VINTAGE LIGTHBLUE",
    precio: 62000,
    talle: 41
},
{
    id: 4,
    foto: "https://http2.mlstatic.com/D_NQ_NP_716166-MLC69617912675_052023-O.webp",
    nombre: "NIKE JUMP 3 CLASSIC",
    precio: 85000,
    talle: 42
},
{
    id: 5,
    foto: "https://cdn.bleacherreport.net/images_root/slides/photos/000/463/717/NikeAirMoreUptempo_original.png?1287990176",
    nombre: "NIKE TEMPO 1 OLD SCHOOL",
    precio: 110000,
    talle: 45
},
{
    id: 6,
    foto: "https://static.wixstatic.com/media/cc9c78_4844a128329946f1b515700737c723c8~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/cc9c78_4844a128329946f1b515700737c723c8~mv2.jpg",
    nombre: "NIKE AIR JORDAN 1",
    precio: 125000,
    talle: 43

}];


const zapasAdidas = [{
    id: 1,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGdQP7dlGmriEzvuIJz1a5s0DX2RhSddymWW-HLGNlAFoCDWd5XSH_jpz5QDwkiVHObk&usqp=CAU",
    nombre: "Adidas Forum 1998 ",
    precio: 64000,
    talle : 44
},
{
    id: 2,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ODhCxKd1VMWKDelXH97F4WCZ05AKUc4mZ_XlaOi7jYCvC7S2hqzrjeGBl2KkLvEeKOM&usqp=CAU",
    nombre: "HOOPS 3.0 MID CLASSIC VINTAGE",
    precio: 47000,
    talle : 46
},
{
    id: 3,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1M5mB6pQ47wvfRgTdFxIfcvykNvxeVPJFx7SDJKDlTnqu0ATdGF3ONKQjw65n9YY6Gs&usqp=CAU",
    nombre: "HOOPS 3.0 MID CLASSIC VINTAGE WHITE",
    precio: 45000,
    talle: 41
},
{
    id: 4,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwMmU13hqgIO3i8HsmXSxMq91BONH4jGEBj5ekmjLToxF6QjLKzYXbp-0cvAGmbBV2Jo&usqp=CAU",
    nombre: "Adidas Patrick Ewing - Patrick Ewing",
    precio: 95000,
    talle: 42
},
{
    id: 5,
    foto: "https://media.revistagq.com/photos/5ca5e762e4ce217cdeaffe00/master/w_350,h_190,c_limit/zapatillas_historicas_baloncesto__63115845.jpg",
    nombre: "Adidas Patrick Ewing-NY",
    precio: 120000,
    talle: 45
},
{
    id: 6,
    foto: "https://media.revistagq.com/photos/62015b8090b22fe93c96dee8/master/w_160%2Cc_limit/adidas-crazy-1-kobe-gy3808-yellow-sunshine.jpeg",
    nombre: "Adidas The Kobe - Kobe Bryant",
    precio: 140000,
    talle: 43

}];
const zapasConverce = [{
    id: 1,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdA7Zhg7AAsU6KKvWGeHefrvBNv0MNl50hgw&usqp=CAU",
    nombre: "Converse Retro 80s ",
    precio: 74000,
    talle : 44
},
{
    id: 2,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuws1Xc_YdofzU6aYhbtx5LUKxJncmEjRTg&usqp=CAU",
    nombre: "LOW NBA 90s CLASSIC VINTAGE",
    precio: 97000,
    talle : 46
},
{
    id: 3,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1M5mB6pQ47wvfRgTdFxIfcvykNvxeVPJFx7SDJKDlTnqu0ATdGF3ONKQjw65n9YY6Gs&usqp=CAU",
    nombre: "HOOPS 3.0 MID CLASSIC VINTAGE WHITE",
    precio: 45000,
    talle: 41
},
{
    id: 4,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYffIbTF49vNi-X3ZND-DMArn3wd5Z3OlWYg&usqp=CAU",
    nombre: "LOW CONVERSE REPLIC LARRY BIRD",
    precio: 95000,
    talle: 42
},
{
    id: 5,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhhSXATaLNu5SogxjFTv-Muji5ek1NE6lYg&usqp=CAU",
    nombre: "Converse CONS -NY",
    precio: 150000,
    talle: 45
},
{
    id: 6,
    foto: "https://tafmx.vtexassets.com/arquivos/ids/403552/A03483C-1.jpg?v=638204768216800000",
    nombre: "LARRY BIRD JUMP",
    precio: 150000,
    talle: 43

}]

