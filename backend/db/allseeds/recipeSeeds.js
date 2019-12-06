// const Restaurant = require('../../models/Restaurant')
// const seededUser = require('../allseeds/userSeed')
// const User = require('../../models/User')


const recipeSeed = (user) => {
  return [{
    name: 'Pappardelle with nduja, mascarpone and lemon',
    ingredients: ['Tagliatelle', 'Nduja', 'Mascarpone', 'Lemons (zest and juice)', 'Parsley', 'Parmesan', 'Olive oil'],
    method: ['Fry the nduja in the olive oil.', 'When the nduja has melted, add the lemon zest and juice, allow to infuse for a couple of minutes.', 'Add the mascarpone, reduce heat and stir', 'Once the sauce has thickened, add the cooked pasta and a tablespoon of its cooking water.', 'Serve topped with chopped parsley and parmesan'],
    image: 'https://i.imgur.com/rEM6L2U.jpg',
    category: ['Pasta'],
    type: ['Dinner'],
    dietary: ['Spicy'],
    complexity: 'Easy',
    time: '30mins or less!',
    user: user
  },
  {
    name: 'Sourdough Bread',
    ingredients: ['400g Strong White Bread Flour', '145g Rye Starter', '50g Rye Flour', '50g Wholemeal Flour', '12g Sea Salt', 'Olive Oil', 'Semolina (for dusting)' ],
    method: ['Mix the flours and the starter.', 'Knead until the gluten develops.', 'Fold, then rest for 12 hours. Bake.'],
    image: 'https://imgur.com/PQaorBZ',
    category: ['Baking'],
    type: ['Breakfast', 'Lunch', 'Dinner'],
    dietary: [''],
    complexity: 'Bit more effort',
    time: '3 days',
    user: user
  },
  {
    name: 'Ramen Noodles',
    ingredients: ['Eggs', 'Noodles', 'Soy Sauce', 'Spring Onions', 'Chicken Stock', 'Protein of your choice - e.g Chicken, Tofu', 'Vegetables of your choice' ],
    method: ['Stick all the ingredients into a pot. Make sure they are cooked.', 'Delicious.'],
    image: 'https://i.imgur.com/1YKD8b1.jpg',
    category: ['Asian'],
    type: ['Lunch', 'Dinner'],
    dietary: ['Vegetarian'],
    complexity: 'Medium's,
    time: 'One Hour',
    user: user
  }]
}



module.exports = recipeSeed
