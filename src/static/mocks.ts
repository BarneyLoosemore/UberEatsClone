import Icon from "./icons";

const offers = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    offerText: "Get 50% off all pizzas"
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/564572f1e4b00444404f386c/1475868875058-2NSGUDJ1L70GVXPNBHNW/MoroccanFood-44.jpg?content-type=image%2Fjpeg",
    offerText: "Use code FD4U for free delivery"
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/54d4153ce4b00c0e483c13a6/1517485882974-GXWPUCO94OO0BQ1H3V43/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/IMG_4990.jpg",
    offerText: "£5 when you spend £25 or more"
  }
];

const dishes = [
  {
    id: 1,
    name: "Sweet and sour chicken",
    description: "Classic dish served with white rice",
    price: "£7.99",
    imageUrl:
      "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
  },
  {
    id: 2,
    name: "Chicken chow mein",
    description: "An iconic meal, cooked fresh to order",
    price: "£6.49",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/delish-chicken-chow-mein-1-jpg-1525987874.jpg"
  },
  {
    id: 3,
    name: "Pasta Arrabiata",
    description: "Classic Italian dish, with fresh chili's",
    price: "£9.49",
    imageUrl:
      "https://www.saltandlavender.com/wp-content/uploads/2019/04/easy-pasta-arrabiata-recipe-1-500x500.jpg"
  },
  {
    id: 4,
    name: "Pizza Napoletana",
    description:
      "Classic Pizza - with tomato sauce, mozarella cheese and fresh basil",
    price: "£9.49",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/05/75/ff/cc/una-pizza-napoletana.jpg"
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    description: "Pizza with tomato, mozarella and pepporoni",
    price: "£10.49",
    imageUrl:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85"
  },
  {
    id: 6,
    name: "Chicken Noodle Soup",
    description: "Pizza with tomato, mozarella and pepporoni",
    price: "£10.49",
    imageUrl:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/05/recipe-image-legacy-id-1035613_10.jpg?itok=ebIUvW6b"
  },
  {
    id: 7,
    name: "Kung Po King Prawn",
    description: "Pizza with tomato, mozarella and pepporoni",
    price: "£8.99",
    imageUrl:
      "https://i.pinimg.com/originals/94/74/9a/94749acf826e2aeb7c21a588e0b81d83.jpg"
  }
];

const getShuffledDishes = () => dishes.sort(() => Math.random() - 0.5);

const restaurantCategories = [
  {
    title: "Favourites",
    restaurants: [
      {
        id: 1,
        title: "New India",
        icons: [Icon.Hot, Icon.Healthy, Icon.Environmental],
        attributes: ["cozy", "fresh", "local"],
        rating: 3.3,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg",
        location: "N15 3PT",
        deliveryFee: "£2.99",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: getShuffledDishes()
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: getShuffledDishes()
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: getShuffledDishes()
          }
        ]
      },

      {
        id: 2,
        title: "Nice Pizza",
        icons: [Icon.Pizza, Icon.Dessert, Icon.Environmental],
        attributes: ["cozy", "fresh"],
        rating: 4.2,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/20-3-large.jpg?itok=1EY8KWJG",
        location: "N8 7RS",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: getShuffledDishes()
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: getShuffledDishes()
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: getShuffledDishes()
          }
        ]
      },
      {
        id: 3,
        title: "Nice Pizza",
        icons: [Icon.Pizza, Icon.VeryHot, Icon.Healthy],
        attributes: ["cozy", "fresh"],
        rating: 2.9,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        location: "N15 3PT",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: getShuffledDishes()
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: getShuffledDishes()
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: getShuffledDishes()
          }
        ]
      }
    ]
  },
  {
    title: "Special Offers",
    restaurants: [
      {
        id: 4,
        title: "China Chef",
        icons: [Icon.ExtremelyHot, Icon.Healthy],
        attributes: ["cozy", "fresh", "local"],
        rating: 4.5,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322303/selection-of-chinese-food-that-may-cause-chinese-restaurant-syndrome.jpg?w=1155&h=1583",
        location: "N15 3PT",
        deliveryFee: "£2.99",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: getShuffledDishes()
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: []
          }
        ]
      },

      {
        id: 5,
        title: "Pasta King",
        icons: [Icon.Environmental, Icon.Pizza, Icon.Hot],
        attributes: ["cozy", "fresh"],
        rating: 3.7,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190305-lemon-garlic-asparagus-pasta-horizontal-161-1553190755.jpg",
        location: "N8 7RS",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 2,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 3,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 4,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: []
          }
        ]
      },
      {
        id: 6,
        title: "Nice Pizza",
        icons: [Icon.Healthy, Icon.Pizza, Icon.VeryHot],
        attributes: ["cozy", "fresh"],
        rating: 3.4,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        location: "N15 3PT",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 2,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 3,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 4,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: []
          }
        ]
      }
    ]
  },
  {
    title: "Free Delivery",
    restaurants: [
      {
        id: 7,
        title: "Noodle Prince",
        icons: [Icon.Dessert, Icon.Hot],
        attributes: ["cozy", "fresh", "local"],
        rating: 4.2,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://www.washingtonpost.com/news/voraciously/wp-content/uploads/sites/68/2020/01/v-rr-lunarnewyear_01_leadweb.jpg",
        location: "N15 3PT",
        deliveryFee: "£2.99",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 2,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 3,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 4,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: []
          }
        ]
      },

      {
        id: 8,
        title: "Nice Pizza",
        icons: [Icon.Healthy, Icon.Pizza, Icon.Environmental],
        attributes: ["cozy", "fresh"],
        rating: 4.8,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        location: "N8 7RS",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 2,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 3,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 4,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: []
          }
        ]
      },
      {
        id: 9,
        title: "Nice Pizza",
        icons: [Icon.Environmental, Icon.Pizza, Icon.Hot],
        attributes: ["cozy", "fresh"],
        rating: 4.6,
        distance: 3.1,
        time: "25-30 min",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        location: "N15 3PT",
        categories: [
          {
            id: 1,
            name: "Fan Favourites",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 2,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 3,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              },
              {
                id: 4,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 2,
            name: "Rice dishes",
            dishes: [
              {
                id: 1,
                name: "Sweet and sour chicken",
                description: "Classic dish served with white rice",
                price: "£7.99",
                imageUrl:
                  "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
              }
            ]
          },
          {
            id: 3,
            name: "Noodle dishes",
            dishes: []
          }
        ]
      }
    ]
  }
];

const restaurants = [
  {
    id: 1,
    title: "China Chef",
    icons: [],
    attributes: ["cozy", "fresh", "local"],
    rating: 6.2,
    distance: 3.1,
    time: "25-30 min",
    imageUrl:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322303/selection-of-chinese-food-that-may-cause-chinese-restaurant-syndrome.jpg?w=1155&h=1583",
    location: "N15 3PT",
    deliveryFee: "£2.99",
    categories: [
      {
        id: 1,
        name: "Fan Favourites",
        dishes: [
          {
            id: 1,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 2,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 3,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 4,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          }
        ]
      },
      {
        id: 2,
        name: "Rice dishes",
        dishes: [
          {
            id: 1,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          }
        ]
      },
      {
        id: 3,
        name: "Noodle dishes",
        dishes: []
      }
    ]
  },

  {
    id: 2,
    title: "Nice Pizza",
    attributes: ["cozy", "fresh"],
    rating: 6.2,
    distance: 3.1,
    time: "25-30 min",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    location: "N8 7RS",
    categories: [
      {
        id: 1,
        name: "Fan Favourites",
        dishes: [
          {
            id: 1,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 2,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 3,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 4,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          }
        ]
      },
      {
        id: 2,
        name: "Rice dishes",
        dishes: [
          {
            id: 1,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          }
        ]
      },
      {
        id: 3,
        name: "Noodle dishes",
        dishes: []
      }
    ]
  },
  {
    id: 3,
    title: "Nice Pizza",
    attributes: ["cozy", "fresh"],
    rating: 6.2,
    distance: 3.1,
    time: "25-30 min",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    location: "N15 3PT",
    categories: [
      {
        id: 1,
        name: "Fan Favourites",
        dishes: [
          {
            id: 1,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 2,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 3,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          },
          {
            id: 4,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          }
        ]
      },
      {
        id: 2,
        name: "Rice dishes",
        dishes: [
          {
            id: 1,
            name: "Sweet and sour chicken",
            description: "Classic dish served with white rice",
            price: "£7.99",
            imageUrl:
              "https://rasamalaysia.com/wp-content/uploads/2014/08/sweet-sour-chicken-thumb.jpg"
          }
        ]
      },
      {
        id: 3,
        name: "Noodle dishes",
        dishes: []
      }
    ]
  }
];

const cuisines = [
  { name: "Pizza", id: 1 },
  { name: "Burgers", id: 2 },
  { name: "Indian", id: 3 },
  { name: "Chinese", id: 4 },
  { name: "Sushi", id: 5 },
  { name: "Thai", id: 6 },
  { name: "Mexican", id: 7 },
  { name: "Desserts", id: 8 }
];

export { offers, restaurants, restaurantCategories };
