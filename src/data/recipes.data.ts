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
        new Ingredient(Products.getByName("Puree z dyni"), 320),
        new Ingredient(Products.getByName("Kwark"), 150),
        new Ingredient(Products.getByName("Płatki owsiane"), 200),
        new Ingredient(Products.getByName("Jajka"), 1),
        new Ingredient(Products.getByName("Mąka"), 200),
        new Ingredient(Products.getByName("Miód"), 12),
        new Ingredient(Products.getByName("Olej"), 6),
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
        new Ingredient(Products.getByName("Bazylia"), 50),
        new Ingredient(Products.getByName("Groszek"), 150),
        new Ingredient(Products.getByName("Orzeszki piniowe"), 25),
        new Ingredient(Products.getByName("Czosnek"), 1),
        new Ingredient(Products.getByName("Oliwa z oliwek"), 18),
        new Ingredient(Products.getByName("Sok z cytryny"), 6),
        new Ingredient(Products.getByName("Makaron penne"), 200),
      ]
    ),
    new Recipe(
      "Chicken Souflaki",
      "description",
      [],
      "images/Chicken_Souflaki.jpeg",
      [
        new Ingredient(Products.getByName("Pierś z kurczaka"), 300),
        new Ingredient(Products.getByName("Cytryna"), 1),
        new Ingredient(Products.getByName("Czosnek"), 1),
        new Ingredient(Products.getByName("Ogórek"), 1),
        new Ingredient(Products.getByName("Ryż"), 150),
        new Ingredient(Products.getByName("Pomidor"), 2),
        new Ingredient(Products.getByName("Jogurt grecki"), 100),
        new Ingredient(Products.getByName("Oliwa z oliwek"), 50),
        new Ingredient(Products.getByName("Cebula"), 1),
      ]
    ),
    new Recipe(
      "Coconut Soup with Beans",
      "description",
      [],
      "images/Coconut_Soup_with_Beans.jpeg",
      [
        new Ingredient(Products.getByName("Żółta papryka"), 1),
        new Ingredient(Products.getByName("Czosnek"), 1),
        new Ingredient(Products.getByName("Limonka"), 1),
        new Ingredient(Products.getByName("Pulpa pomidorowa (puszka)"), 1),
        new Ingredient(Products.getByName("Tortille"), 2),
        new Ingredient(Products.getByName("Mleko kokosowe"), 100),
        new Ingredient(Products.getByName("Czerwona fasola (puszka)"), 100),
        new Ingredient(Products.getByName("Cebula"), 1),
        new Ingredient(Products.getByName("Wiórki kokosowe"), 50),
      ]
    ),
    new Recipe(
      "Mexican Chicken With Salad",
      "description",
      [],
      "images/Mexican_Chicken_with_Salad.jpeg",
      [
        new Ingredient(Products.getByName("Pierś z kurczaka"), 300),
        new Ingredient(Products.getByName("Sałata"), 1),
        new Ingredient(Products.getByName("Kukurydza (puszka)"), 150),
        new Ingredient(Products.getByName("Limonka"), 1),
        new Ingredient(Products.getByName("Tortille"), 1),
        new Ingredient(Products.getByName("Cebula"), 1),
        new Ingredient(Products.getByName("Czerwona fasola (puszka)"), 150),
      ]
    ),
    new Recipe(
      "Gnocchi with Spinach",
      "description",
      [],
      "images/Gnocchi_with_Spinach.jpeg",
      [
        new Ingredient(Products.getByName("Orzeszki piniowe"), 50),
        new Ingredient(Products.getByName("Parmezan"), 1),
        new Ingredient(Products.getByName("Szpinak"), 75),
        new Ingredient(Products.getByName("Gnocchi"), 400),
        new Ingredient(Products.getByName("Śmietana kremówka"), 100),
        new Ingredient(Products.getByName("Czosnek"), 1),
        new Ingredient(Products.getByName("Bazylia"), 1),
      ]
    ),
    new Recipe(
      "Bao Buns with Vegetables",
      "description",
      [],
      "images/Bao_Buns_ith_Vegetables.jpeg",
      [
        new Ingredient(Products.getByName("Bułki bao"), 4),
        new Ingredient(Products.getByName("Ogórek"), 1),
        new Ingredient(Products.getByName("Majonez"), 1),
        new Ingredient(Products.getByName("Czosnek"), 1),
        new Ingredient(Products.getByName("Marchew"), 100),
        new Ingredient(Products.getByName("Ziemniaki"), 200),
        new Ingredient(Products.getByName("Pieczarki"), 200),
        new Ingredient(Products.getByName("Sos Sriracha"), 1),
        new Ingredient(Products.getByName("Olej sezamowy"), 10),
        new Ingredient(Products.getByName("Dymka"), 1),
        new Ingredient(Products.getByName("Sos sojowy"), 10),
        new Ingredient(Products.getByName("Mięta"), 1),
      ]
    ),
    new Recipe(
      "Chicken in Apricot-Curry Sauce",
      "description",
      [],
      "images/Chicken_in_Apricot_Curry_Sauce.jpeg",
      [
        new Ingredient(Products.getByName("Pierś z kurczaka"), 240),
        new Ingredient(Products.getByName("Czosnek"), 1),
        new Ingredient(Products.getByName("Dziki ryż"), 100),
        new Ingredient(Products.getByName("Słodka papryka"), 1),
        new Ingredient(Products.getByName("Cebula"), 1),
        new Ingredient(Products.getByName("Marchew"), 100),
        new Ingredient(Products.getByName("Pietruszka"), 1),
        new Ingredient(Products.getByName("Curry"), 1),
        new Ingredient(Products.getByName("Suszone morele"), 50),
      ]
    ),
    new Recipe(
      "Fettuccine Pasta with Salmon",
      "description",
      [],
      "images/Fettuccine_Pasta_with_Salmon.jpeg",
      [
        new Ingredient(Products.getByName("Makaron fettuccine"), 270),
        new Ingredient(Products.getByName("Łosoś"), 250),
        new Ingredient(Products.getByName("Brokuł"), 250),
        new Ingredient(Products.getByName("Dymka"), 2),
        new Ingredient(Products.getByName("Czosnek"), 1),
        new Ingredient(Products.getByName("Śmietanka 12%"), 250),
        new Ingredient(Products.getByName("Cytryna"), 1),
      ]
    ),
    new Recipe(
      "Mexican Salad with BBQ Chicken",
      "description",
      [],
      "images/Mexican_Salad_with_Bbq_Chicken.jpeg",
      [
        new Ingredient(Products.getByName("Pierś z kurczaka"), 350),
        new Ingredient(Products.getByName("Sałata"), 1),
        new Ingredient(Products.getByName("Pomidor"), 2),
        new Ingredient(Products.getByName("Majonez"), 2),
        new Ingredient(Products.getByName("Czerwona fasola (puszka)"), 200),
        new Ingredient(Products.getByName("Limonka"), 1),
        new Ingredient(Products.getByName("Sos BBQ"), 1),
        new Ingredient(Products.getByName("Nachosy"), 100),
        new Ingredient(Products.getByName("Kukurydza (puszka)"), 150),
      ]
    ),
    new Recipe(
      "Spanish Baked Potatoes",
      "description",
      [],
      "images/Spanish_Baked_Potatoes.jpeg",
      [
        new Ingredient(Products.getByName("Ziemniaki"), 500),
        new Ingredient(Products.getByName("Ser feta"), 100),
        new Ingredient(Products.getByName("Pomidorki koktajlowe"), 2),
        new Ingredient(Products.getByName("Migdały"), 10),
        new Ingredient(Products.getByName("Jogurt naturalny"), 100),
        new Ingredient(Products.getByName("Rukola"), 100),
        new Ingredient(Products.getByName("Suszone pomidory"), 100),
      ]
    ),
    new Recipe(
      "Simple Brownie",
      "description",
      [],
      "images/Simple_Brownie.jpeg",
      [
        new Ingredient(Products.getByName("Czekolada gorzka"), 250),
        new Ingredient(Products.getByName("Masło"), 200),
        new Ingredient(Products.getByName("Jajka"), 3),
        new Ingredient(Products.getByName("Cukier"), 250),
        new Ingredient(Products.getByName("Mąka"), 135),
        new Ingredient(Products.getByName("Sól"), 1),
      ]
    ),
    new Recipe(
      "Baked Salmon With Vegetables",
      "description",
      [],
      "images/Baked_Salmon_with_Vegetables.jpeg",
      [
        new Ingredient(Products.getByName("Mrożony łosoś"), 250),
        new Ingredient(Products.getByName("Mrożone warzywa"), 700),
      ]
    ),
    new Recipe(
      "Simple Burrito",
      "description",
      [],
      "images/Simple_Burrito.jpeg",
      [
        new Ingredient(Products.getByName("Sól"), 1),
        new Ingredient(Products.getByName("Tortille"), 4),
        new Ingredient(Products.getByName("Kukurydza (puszka)"), 350),
        new Ingredient(Products.getByName("Mięso mielone wołowe"), 500),
        new Ingredient(Products.getByName("Awokado"), 1),
        new Ingredient(Products.getByName("Cebula"), 1),
        new Ingredient(Products.getByName("Pomidor"), 2),
        new Ingredient(Products.getByName("Pieprz"), 100),
        new Ingredient(Products.getByName("Czerwona fasola (puszka)"), 200),
        new Ingredient(Products.getByName("Ryż"), 100),
      ]
    ),
    new Recipe(
      "American Pancakes",
      "description",
      [],
      "images/American_Pancakes.jpeg",
      [
        new Ingredient(Products.getByName("Jajka"), 1),
        new Ingredient(Products.getByName("Mąka"), 300),
        new Ingredient(Products.getByName("Masło"), 300),
        new Ingredient(Products.getByName("Cukier puder"), 300),
        new Ingredient(Products.getByName("Proszek do pieczenia"), 3),
        new Ingredient(Products.getByName("Soda oczyszczona"), 2.5),
        new Ingredient(Products.getByName("Sól"), 1),
        new Ingredient(Products.getByName("Olej"), 30),
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
