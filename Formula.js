var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile", autoload: true });

var doc =[
{
  name: "Sinx",
  formula: "Opposite Side / Hypotenuse",
},
{
  name: "Cosx",
  formula: "Adjacent Side / Hypotenuse",
},
{
  name: "Tanx",
  formula: "Opposite Side / Adjacent Side",
},
{
  name: "Secx",
  formula: "Hypotenuse / Adjacent Side",
},
{
  name: "Cosecx",
  formula: "Hypotenuse / Opposite Side",
},
{
  name: "Cotx",
  formula: "Adjacent Side / Opposite Side",
},
{
  name: "Square",
  formula: "Square H@s Area and perimeter. Select your formula 😇",
},
{
  name: "Square area",

  formula: "Side * Side",
},
{
  name: "Square perimeter",
  formula: "4*Side",
},
{
  name:"Rectangle",
  formula: "Rectangle H@s Area and Perimeter. Select your formula 😊",
},
{
  name:  "Rectangle area",
  formula: "Length * Breadth",
},
{
  name:  "Rectangle perimeter",
  formula: "2(length+breadth)",
},
{
  name:  "Cube",
  formula: "Cube H@s Area and Perimeter and Volume. Select your formula 😁",
},
{
   name: "Cube area",
   formula: "6*Side*Side",
},
{
    name: "Cube perimeter",
    formula: "12 * Side",
},
{
    name: "Cube volume",
    formula: "Side*Side*Side",
},

{
   name:"Triangle",
   formula:"Triangle H@S Both Area and Perimeter. Select your formula 😉",
  },
{
    name:"Triangle area",
    formula:"Half * Base * Height",
},
{
    name:"Triangle perimeter",
    formula:"Side + base +side",
},
{
  name:"Cylinder",
  formula:"Cylinder H@s Both Area and  Volume. Select your formula 😇",
},
{
  name:"Cylinder area",
  formula:"2*PI*r(h+r)",
},
{
  name:"Cylinder volume",
  formula:"PI*r*r*h",
},
{
  name:"Sphere",
  formula:"Sphere H@s Both Area and  Volume. Select your formula 😇",
},
{
  name:"Sphere area",
  formula:"4*PI*r*r",
},
{
  name:"Sphere volume",
  formula:"4/3*PI*r*r*r",
},
{
  name:"Hi",
  formula:"This CHATBOT is created to give valid formulas about the Mensuration and Trignometry basic formulas  😊 😊 😊 😊 😊",
},
{
  name:"How r u",
  formula:"Fine  😊 😊 😊 ",
},
{
  name:"Bye",
  formula:"Take care😉😉😉😉 Bye bye",
},
  
];
db.insert(doc, function (err, newDoc) {
console.log("inserted Successfully");
});
