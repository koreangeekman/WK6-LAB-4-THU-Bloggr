// const blogModel = {
//   "title": {
//     "type": "String",
//     "required": true,
//     "maxLength": 100
//   },
//   "body": {
//     "type": "String",
//     "required": true,
//     "maxLength": 10000
//   },
//   "imgUrl": {
//     "type": "String",
//     "maxLength": 500
//   },
//   "tags": [
//     {
//       "type": "String",
//       "maxLength": 50
//     }
//   ],
//   "published": {
//     "type": "Boolean",
//     "default": true
//   },
//   "creatorId": {
//     "type": "ObjectId",
//     "required": true
//   }
// }

// const blog = {
//   "_id": "6478fab45bdd4f203d49d552",
//   "title": "Diners, Drive-Ins and Despair",
//   "body": "I love cheese, especially cheese and wine ricotta. Cream cheese roquefort dolcelatte cheese on toast cheese triangles pecorino cauliflower cheese cheese and wine. Fromage cheese strings babybel manchego feta cottage cheese babybel squirty cheese. Stinking bishop edam boursin croque monsieur pecorino cheese on toast dolcelatte feta. Macaroni cheese cheesy grin bocconcini. Smelly cheese cauliflower cheese emmental. Taleggio rubber cheese cheeseburger bocconcini danish fontina cheese on toast rubber cheese chalk and cheese. Squirty cheese everyone loves paneer cheesy grin camembert de normandie caerphilly everyone loves cheese on toast. Paneer halloumi cut the cheese. Rubber cheese mascarpone edam. Who moved my cheese jarlsberg paneer red leicester port-salut dolcelatte taleggio cow. Brie emmental babybel cheddar cheeseburger roquefort everyone loves macaroni cheese. Cow swiss camembert de normandie parmesan cheese and biscuits dolcelatte. Everyone loves cheese and biscuits cheese and biscuits. Fromage roquefort ricotta cheddar cheese and wine bavarian bergkase halloumi mascarpone. Cheesy feet port-salut cheese strings who moved my cheese cheesecake macaroni cheese stilton chalk and cheese. Manchego cheese slices cheeseburger brie roquefort dolcelatte paneer. Jarlsberg cream cheese melted cheese. Gouda monterey jack brie cheese on toast croque monsieur manchego cheese on toast cheddar. Brie croque monsieur cow jarlsberg bavarian bergkase cheesy feet cheese and wine when the cheese comes out everybody's happy. Macaroni cheese lancashire fondue rubber cheese cheese slices.",
//   "imgUrl": "https://cdn.vox-cdn.com/thumbor/wF6h_aLJWGAYASY-pyXQFayNALQ=/0x870:5221x3481/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/10661969/GettyImages_642908826.jpg",
//   "tags": [
//     "diners",
//     "drive-ins",
//     "dives",
//     "despair",
//     "hair styling"
//   ],
//   "published": true,
//   "creatorId": "6303ba27fb047e3d0d698660",
//   "createdAt": "2023-06-01T20:08:20.353Z",
//   "updatedAt": "2023-06-01T20:08:20.353Z",
//   "__v": 0,
//   "creator": {
//     "_id": "6303ba27fb047e3d0d698660",
//     "subs": [
//       "auth0|6303ba26837b0d2b62e68435"
//     ],
//     "email": "jerms@jerms.jerms",
//     "name": "BIG GUY",
//     "picture": "https://media2.giphy.com/media/PXL0Co0RcDQu4/giphy.gif?cid=ecf05e47zvanfbnauf04qu5hfasl17byue24w60wnj6otwl9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//     "bio": "A troll figurine comes to life, and decides to roam the countryside eating garbage.",
//     "coverImg": "https://media2.giphy.com/media/4ayiIWaq2VULC/giphy.gif?cid=ecf05e47h4186v6v8l8aet14vlv8xsxjxzud2yikt2ciqq1p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
//     "github": "",
//     "linkedin": "",
//     "resume": "",
//     "class": "",
//     "graduated": true,
//     "createdAt": "2023-06-01T15:20:58.001Z",
//     "updatedAt": "2023-06-01T15:42:47.495Z",
//     "__v": 0,
//     "id": "6303ba27fb047e3d0d698660"
//   },
//   "id": "6478fab45bdd4f203d49d552"
// }

export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.published = data.published
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creatorId = data.creatorId
    this.creator = data.creator
  }
}