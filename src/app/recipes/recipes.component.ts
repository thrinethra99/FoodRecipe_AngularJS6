import { Component, OnInit } from '@angular/core';
import {Recipes} from './recipes.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipes;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipes) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
