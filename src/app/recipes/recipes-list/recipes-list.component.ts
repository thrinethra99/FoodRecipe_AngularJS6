import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipes} from '../recipes.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
   // @Output() recipeWasSelected = new EventEmitter<Recipes>();
    recipes: Recipes[];
//      = [
//   new Recipes('icecream','simple test','https://i.pinimg.com/originals/1c/85/2f/1c852fba1d2dc24d6e55727ef4a90c38.jpg'),
//   new Recipes('icecream','simple test','https://i.pinimg.com/originals/1c/85/2f/1c852fba1d2dc24d6e55727ef4a90c38.jpg')
//
// ];

  constructor(private recipeService: RecipesService , private router: Router
  , private route: ActivatedRoute) {
}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipes) {
  //  this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
this.router.navigate(['new'], {relativeTo: this.route})
  }
}

