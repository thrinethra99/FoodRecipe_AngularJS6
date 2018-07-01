import {Component, OnInit} from '@angular/core';
import {Recipes} from '../recipes.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
    recipe: Recipes;
    id: number;
  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }


  onAddToShoppingList() {
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  OnEditRecipe() {
    this.router.navigate(['edit'], {relativeTo : this.route});
  }
}
