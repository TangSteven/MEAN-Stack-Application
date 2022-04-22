import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodAPIService } from 'src/app/services/food-api.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-food-db',
  templateUrl: './food-db.component.html',
  styleUrls: ['./food-db.component.css']
})
export class FoodDBComponent implements OnInit {

  constructor(private router: Router, private foodApi: FoodAPIService, private fb: FormBuilder, private backend: ServerService) { }
  food;

  foodSearch = this.fb.group({ //form to search for the food name
    foodSearchName: ['']
  })


  ngOnInit(): void {
    
  }

  addToCart() {
    //console.log(this.foodSearch.value.foodSearchName);

    this.foodApi.getFood(this.foodSearch.value.foodSearchName).subscribe(foodApiJSON => { //use of the food api to get the api's information
      //console.log();
      this.food = { //went through the api's response info, and looked for needed data
        "name": foodApiJSON.text, 
        "calories": foodApiJSON.parsed[0].food.nutrients.ENERC_KCAL,
        "image": foodApiJSON.parsed[0].food.image
      }
      console.log(this.food);
      this.backend.addFood(localStorage.getItem("user"), this.food).subscribe(query => { //adding the food to the backend mongodb 
        if (query) {
          this.router.navigate(["/home"]); //navigating back to home page
        }
      });
    });
    

    //console.log(this.food);
  }

}
