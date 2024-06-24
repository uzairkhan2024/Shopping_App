

import { Component, OnInit } from '@angular/core';

import { Recipe }  from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{
  recipes : Recipe[] = [
    new Recipe ('A test rcipe'  , 'This is simply a test' , 'https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg')
  ];

  constructor (){}
  ngOnInit(): void {
    
  }
}
