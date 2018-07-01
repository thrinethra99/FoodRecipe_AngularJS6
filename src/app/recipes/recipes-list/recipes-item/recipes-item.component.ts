import {Component,  Input, OnInit, } from '@angular/core';
import {Recipes} from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 @Input() recipe: Recipes;
 // @Output() recipeSelected = new EventEmitter<void>()

  @Input() index: number;
  ngOnInit() {
  }


}
