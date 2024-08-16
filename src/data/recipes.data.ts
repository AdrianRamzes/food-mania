import { Ingredient, Recipe } from "../models/recipe.model";
import { Products } from "../data/products.data";

export class Recipes {
  public static readonly all = [
    new Recipe(
      "Pumpkin Pancakes with Cheese",
      "description",
      [
        `Do miski przełóż płatki owsiane, puree z dyni, serek, miód. Wymieszaj.
        Oddziel żółtko od białka, dodaj żółtko do miski z dynią, a białko ubij na sztywną pianę.
        Wymieszaj ponownie płatki owsiane z serkiem, dynią, żółtkiem, miodem, dodaj mąkę, wymieszaj,
        a na koniec dodaj ubitą pianę z białka i ponownie całość wymieszaj na jednolitą masę.`,
        `Na patelni rozgrzej 2 łyżki oliwy/oleju. To ważne by patelnia była tłusta,
        inaczej placki będą się przyklejać i rozpadać. Nakładaj porcję ciasta za pomocą małej 
        łyżeczki, obsmażaj z jeden strony, a następnie przewróć na drugą za pomocą szpatułki, 
        spłaszcz placuszek i dalej smaż do zrumienienia. W trakcie smażenia przewróć placuszki jeszcze z dwa razy. 
        Smaż ok 3-4 minut całkowicie. Po usmażeniu przełóż na talerz wyłożony ręcznikiem papierowym, 
        by odsączyć placuszki z nadmiaru tłuszczu.`,
        `Placuszki będą w środku lekko wilgotne, ponieważ dynia zawsze daje takie ”odczucie”:) 
        Jeśli dostatecznie długo będziesz je smażyć na niewielkim ogniu, na pewno nie będą surowe.`,
        `Niemowlętom pomiń miód dynia jest wystarczająco słodka. 
        Podawaj je starszym niemowlętom bliżej 12 miesiąca życia.`,
      ],
      "images/Pumpkin_Pancakes_with_Cheese.jpg",
      [
        new Ingredient(Products.getByName("Pumpkin Puree"), 320),
        new Ingredient(Products.getByName("Quark"), 150),
        new Ingredient(Products.getByName("Oatmeal"), 200),
        new Ingredient(Products.getByName("Eggs"), 1),
        new Ingredient(Products.getByName("Flour"), 200),
        new Ingredient(Products.getByName("Honey"), 12),
        new Ingredient(Products.getByName("Oil"), 6),
      ]
    ),
    new Recipe(
      "Pea and Basil Pesto",
      "description",
      [
        "Nastaw wodę na makaron i ugotuj go.",
        `Do misy minimalaksera przełóż groszek, 
        dodaj listki bazylii, czosnek, orzechy, oliwę, 
        sok z cytryny i paremazan. Zblenduj całość na gładkie pesto. 
        Jeśli lubisz mniej gładką konsystencję, przerwij blendowanie szybciej. 
        Przełóż pesto do dużej miski.`,
        `Ugotowany, jeszcze gorący, makaron przełóż do miski, 
        w której znajduje się pesto i wymieszaj całość, by pesto oblepiło penne.`,
        "Podawaj posypane parmezanem. Maluszkowi pomiń parmezan.",
      ],
      "images/Pea_and_Basil_Pesto.jpg",
      [
        new Ingredient(Products.getByName("Basil"), 50),
        new Ingredient(Products.getByName("Peas"), 150),
        new Ingredient(Products.getByName("Pine Nuts"), 25),
        new Ingredient(Products.getByName("Garlic"), 1),
        new Ingredient(Products.getByName("Olive Oil"), 18),
        new Ingredient(Products.getByName("Lemon Juice"), 6),
        new Ingredient(Products.getByName("Penne Pasta"), 200),
      ]
    ),
    new Recipe(
      "Chicken Souflaki",
      "description",
      [],
      "images/Chicken_Souflaki.jpeg",
      [
        new Ingredient(Products.getByName("Chicken Breast"), 300),
        new Ingredient(Products.getByName("Lemon"), 1),
        new Ingredient(Products.getByName("Garlic"), 1),
        new Ingredient(Products.getByName("Cucumber"), 1),
        new Ingredient(Products.getByName("Rice"), 150),
        new Ingredient(Products.getByName("Tomato"), 2),
        new Ingredient(Products.getByName("Greek Yogurt"), 100),
        new Ingredient(Products.getByName("Olive Oil"), 50),
        new Ingredient(Products.getByName("Onion"), 1),
      ]
    ),
    new Recipe(
      "Coconut Soup with Beans",
      "description",
      [],
      "images/Coconut_Soup_with_Beans.jpeg",
      [
        new Ingredient(Products.getByName("Yellow Paprika"), 1),
        new Ingredient(Products.getByName("Garlic"), 1),
        new Ingredient(Products.getByName("Lime"), 1),
        new Ingredient(Products.getByName("Tomato Pulp (canned)"), 1),
        new Ingredient(Products.getByName("Tortillas"), 2),
        new Ingredient(Products.getByName("Coconut Milk"), 100),
        new Ingredient(Products.getByName("Red Bean (canned)"), 100),
        new Ingredient(Products.getByName("Onion"), 1),
        new Ingredient(Products.getByName("Coconut Flakes"), 50),
      ]
    ),
    new Recipe(
      "Mexican Chicken With Salad",
      "description",
      [],
      "images/Mexican_Chicken_with_Salad.jpeg",
      [
        new Ingredient(Products.getByName("Chicken Breast"), 300),
        new Ingredient(Products.getByName("Salad"), 1),
        new Ingredient(Products.getByName("Sweet Corn (canned)"), 150),
        new Ingredient(Products.getByName("Lime"), 1),
        new Ingredient(Products.getByName("Tortillas"), 1),
        new Ingredient(Products.getByName("Onion"), 1),
        new Ingredient(Products.getByName("Red Bean (canned)"), 150),
      ]
    ),
    new Recipe(
      "Gnocchi with Spinach",
      "description",
      [],
      "images/Gnocchi_with_Spinach.jpeg",
      [
        new Ingredient(Products.getByName("Pine Nuts"), 50),
        new Ingredient(Products.getByName("Parmesan Cheese"), 1),
        new Ingredient(Products.getByName("Spinach"), 75),
        new Ingredient(Products.getByName("Gnocchi"), 400),
        new Ingredient(Products.getByName("Creme Fraiche"), 100),
        new Ingredient(Products.getByName("Garlic"), 1),
        new Ingredient(Products.getByName("Basil"), 1),
      ]
    ),
    new Recipe(
      "Bao Buns with Vegetables",
      "description",
      [],
      "images/Bao_Buns_ith_Vegetables.jpeg",
      [
        new Ingredient(Products.getByName("Bao Buns"), 4),
        new Ingredient(Products.getByName("Cucumber"), 1),
        new Ingredient(Products.getByName("Mayo"), 1),
        new Ingredient(Products.getByName("Garlic"), 1),
        new Ingredient(Products.getByName("Carrot"), 100),
        new Ingredient(Products.getByName("Potatoes"), 200),
        new Ingredient(Products.getByName("Mushrooms"), 200),
        new Ingredient(Products.getByName("Sriracha Sauce"), 1),
        new Ingredient(Products.getByName("Sesame Oil"), 10),
        new Ingredient(Products.getByName("Spring Onion"), 1),
        new Ingredient(Products.getByName("Soya Sauce"), 10),
        new Ingredient(Products.getByName("Mint"), 1),
      ]
    ),
    new Recipe(
      "Chicken in Apricot-Curry Sauce",
      "description",
      [],
      "images/Chicken_in_Apricot_Curry_Sauce.jpeg",
      [
        new Ingredient(Products.getByName("Chicken Breast"), 240),
        new Ingredient(Products.getByName("Garlic"), 1),
        new Ingredient(Products.getByName("Wild Rice"), 100),
        new Ingredient(Products.getByName("Sweet Paprika"), 1),
        new Ingredient(Products.getByName("Onion"), 1),
        new Ingredient(Products.getByName("Carrot"), 100),
        new Ingredient(Products.getByName("Parsley"), 1),
        new Ingredient(Products.getByName("Curry"), 1),
        new Ingredient(Products.getByName("Dried Apricots"), 50),
      ]
    ),
    new Recipe(
      "Fettuccine Pasta with Salmon",
      "description",
      [],
      "images/Fettuccine_Pasta_with_Salmon.jpeg",
      [
        new Ingredient(Products.getByName("Fettuccine Pasta"), 270),
        new Ingredient(Products.getByName("Salmon"), 250),
        new Ingredient(Products.getByName("Broccoli"), 250),
        new Ingredient(Products.getByName("Spring Onion"), 2),
        new Ingredient(Products.getByName("Garlic"), 1),
        new Ingredient(Products.getByName("Half Cream"), 250),
        new Ingredient(Products.getByName("Lemon"), 1),
      ]
    ),
    new Recipe(
      "Mexican Salad with BBQ Chicken",
      "description",
      [],
      "images/Mexican_Salad_with_Bbq_Chicken.jpeg",
      [
        new Ingredient(Products.getByName("Chicken Breast"), 350),
        new Ingredient(Products.getByName("Salad"), 1),
        new Ingredient(Products.getByName("Tomato"), 2),
        new Ingredient(Products.getByName("Mayo"), 2),
        new Ingredient(Products.getByName("Red Bean (canned)"), 200),
        new Ingredient(Products.getByName("Lime"), 1),
        new Ingredient(Products.getByName("BBQ Sauce"), 1),
        new Ingredient(Products.getByName("Nachos"), 100),
        new Ingredient(Products.getByName("Sweet Corn (canned)"), 150),
      ]
    ),
    new Recipe(
      "Spanish Baked Potatoes",
      "description",
      [],
      "images/Spanish_Baked_Potatoes.jpeg",
      [
        new Ingredient(Products.getByName("Potatoes"), 500),
        new Ingredient(Products.getByName("Feta Cheese"), 100),
        new Ingredient(Products.getByName("Cherry Tomato"), 2),
        new Ingredient(Products.getByName("Almond"), 10),
        new Ingredient(Products.getByName("Natural Yogurt"), 100),
        new Ingredient(Products.getByName("Rucola"), 100),
        new Ingredient(Products.getByName("Dried Tomato"), 100),
      ]
    ),
    new Recipe(
      "Simple Brownie",
      "description",
      [],
      "images/Simple_Brownie.jpeg",
      [
        new Ingredient(Products.getByName("Dark Chocolate"), 250),
        new Ingredient(Products.getByName("Butter"), 200),
        new Ingredient(Products.getByName("Eggs"), 3),
        new Ingredient(Products.getByName("Sugar"), 250),
        new Ingredient(Products.getByName("Flour"), 135),
        new Ingredient(Products.getByName("Salt"), 1),
      ]
    ),
    new Recipe(
      "Baked Salmon With Vegetables",
      "description",
      [],
      "images/Baked_Salmon_with_Vegetables.jpeg",
      [
        new Ingredient(Products.getByName("Frozen Salmon"), 250),
        new Ingredient(Products.getByName("Frozen Vegetables"), 700),
      ]
    ),
    new Recipe(
      "Simple Burrito",
      "description",
      [],
      "images/Simple_Burrito.jpeg",
      [
        new Ingredient(Products.getByName("Salt"), 1),
        new Ingredient(Products.getByName("Tortillas"), 4),
        new Ingredient(Products.getByName("Sweet Corn (canned)"), 350),
        new Ingredient(Products.getByName("Ground Beef"), 500),
        new Ingredient(Products.getByName("Avocado"), 1),
        new Ingredient(Products.getByName("Onion"), 1),
        new Ingredient(Products.getByName("Tomato"), 2),
        new Ingredient(Products.getByName("Pepper"), 100),
        new Ingredient(Products.getByName("Red Bean (canned)"), 200),
        new Ingredient(Products.getByName("Rice"), 100),
      ]
    ),
    new Recipe(
      "American Pancakes",
      "description",
      [],
      "images/American_Pancakes.jpeg",
      [
        new Ingredient(Products.getByName("Eggs"), 1),
        new Ingredient(Products.getByName("Flour"), 300),
        new Ingredient(Products.getByName("Butter"), 300),
        new Ingredient(Products.getByName("Powdered Sugar"), 300),
        new Ingredient(Products.getByName("Baking Powder"), 3),
        new Ingredient(Products.getByName("Baking Soda"), 2.5),
        new Ingredient(Products.getByName("Salt"), 1),
        new Ingredient(Products.getByName("Oil"), 30),
      ]
    ),
  ];

  private static readonly _recipesMap: ReadonlyMap<string, Recipe> = new Map(
    this.all.map((r) => [r.title, r])
  );

  public static getByTitle(title: string): Recipe {
    return this._recipesMap.get(title)!;
  }
}
