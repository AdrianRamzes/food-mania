import { Product, Units } from '../models/product.model';

/**
 * Avocado..........................12
 * Baking Powder....................21
 * Baking Soda......................23
 * Butter............................1
 * Buttermilk.......................20
 * Dark Chocolate....................0
 * Eggs..............................2
 * Flour.............................4
 * Frozen Salmon.....................6
 * Frozen Vegetables.................7
 * Ground Beef......................11
 * Majo.............................17
 * Milk.............................19
 * Oil..............................22
 * Onion............................13
 * Pepper...........................15
 * Potatoes..........................8
 * Powdered Sugar...................24
 * Red Bean (canned)................16
 * Rice.............................18
 * Salt..............................5
 * Sugar.............................3
 * Sweet Corn (canned)..............10
 * Tomato...........................14
 * Tortillas.........................9
 */

export const products = [
  {
    index: 0,
    name: 'Dark Chocolate',
    unit: Units.g,
  } as Product,
  {
    index: 1,
    name: 'Butter',
    unit: Units.g,
  } as Product,
  {
    index: 2,
    name: 'Eggs',
    unit: Units.piece,
  } as Product,
  {
    index: 3,
    name: 'Sugar',
    unit: Units.g,
  } as Product,
  {
    index: 4,
    name: 'Flour',
    unit: Units.g,
  } as Product,
  {
    index: 5,
    name: 'Salt',
    unit: Units.spice,
  } as Product,
  {
    index: 6,
    name: 'Frozen Salmon',
    unit: Units.g,
  } as Product,
  {
    index: 7,
    name: 'Frozen Vegetables',
    unit: Units.g,
  } as Product,
  {
    index: 8,
    name: 'Potatoes',
    unit: Units.kg,
  } as Product,
  {
    index: 9,
    name: 'Tortillas',
    unit: Units.piece,
  } as Product,
  {
    index: 10,
    name: 'Sweet Corn (canned)',
    unit: Units.g,
  } as Product,
  {
    index: 11,
    name: 'Ground Beef',
    unit: Units.g,
  } as Product,
  {
    index: 12,
    name: 'Avocado',
    unit: Units.piece,
  } as Product,
  {
    index: 13,
    name: 'Onion',
    unit: Units.piece,
  } as Product,
  {
    index: 14,
    name: 'Tomato',
    unit: Units.piece,
  } as Product,
  {
    index: 15,
    name: 'Pepper',
    unit: Units.spice,
  } as Product,
  {
    index: 16,
    name: 'Red Bean (canned)',
    unit: Units.g,
  } as Product,
  {
    index: 17,
    name: 'Majo',
    unit: Units.ml,
  } as Product,
  {
    index: 18,
    name: 'Rice',
    unit: Units.g,
  } as Product,
  {
    index: 19,
    name: 'Milk',
    unit: Units.l,
  } as Product,
  {
    index: 20,
    name: 'Buttermilk',
    unit: Units.ml,
  } as Product,
  {
    index: 21,
    name: 'Baking Powder',
    unit: Units.g,
  } as Product,
  {
    index: 22,
    name: 'Oil',
    unit: Units.g,
  } as Product,
  {
    index: 23,
    name: 'Baking Soda',
    unit: Units.g,
  } as Product,
  {
    index: 24,
    name: 'Powdered Sugar',
    unit: Units.g,
  } as Product,
];
