import './style.css';

export default function RecipeCard({ amount }) {
    const foodOne = {
        image: require("../../../media/food-image-1.jpg"),
        name: "Anna's California Miso Avocado Salad recipes",
        ingredients: [
            "1 tablespoon brown rice miso paste", 
            "1 tablespoon brown rice vinegar", 
            "1 tablespoon ponzu or soy sauce", 
            "juice of 1/2 a lime", 
            "4 tablespoons cow's milk or soy yogurt", 
            "sea salt", 
            "5 ounces / 150 g broccoli, stems chopped, florets broken into little heads", 
            "2 tablespoons pumpkin seeds", 
            "2 tablespoons sesame seeds", 
            "2 handfuls of seasonal salad leaves, washed and dried", 
            "1 ripe avocado, pitted and halved", 
            "1 (15-ounce/400 g) can white beans (or equivalent), drained and chopped"],
        nutritions: {
            calories: 1142,
            fat: 50,
            carbs: 137,
            protein: 52,
        }
    };
    const foodTwo = {
        image: require("../../../media/food-image-2.jpg"),
        name: "Spinach Frittata with Green Salad",
        ingredients: [
            "1 large egg plus 2 large egg whites",
            "2 tablespoons grated aged cheese, such as gruyere",
            "2 teaspoons whole milk",
            "Coarse salt and ground pepper",
            "1 teaspoon extra-virgin olive oil",
            "1/2 small shallot, minced",
            "1 1/2 cups baby spinach",
            "Nonstick cooking spray",
            "2 cups salad greens",
            "1/4 teaspoon cider, sherry, or red-wine vinegar"],
        nutritions: {
            calories: 323,
            fat: 22,
            carbs: 9,
            protein: 24,
        }
    };
    const foods = [foodOne, foodTwo];
    const recipes = [];

    function returnRecipe() {
        let numOfFoodToSend = foods.length - amount;
        console.log(numOfFoodToSend);
        if (numOfFoodToSend <= 0) numOfFoodToSend = foods.length;
        console.log(numOfFoodToSend);

        for (let i = 0; i < numOfFoodToSend; i++) {
            recipes.push(foods[i]);
        }
    }

    return (
        <>
            {returnRecipe()}
            {recipes.map(recipe => {
                return (
                    <div className="recipe-card">
                    <img className="recipe-img" src={recipe.image} alt={recipe.name}/>
                    <div className="recipe-desc">
                        <h3>{recipe.name}</h3>
                        <p>{`Calories: ${recipe.nutritions.calories}`}</p>
                        <p>{`Fat: ${recipe.nutritions.fat}`}</p>
                        <p>{`Carbohydrates: ${recipe.nutritions.carbs}`}</p>
                        <p>{`Protein: ${recipe.nutritions.protein}`}</p>
                    </div>
                    </div>
                )
            })}
        </>
    );
}