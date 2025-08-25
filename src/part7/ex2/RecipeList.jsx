import { recipes } from './data.js'

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        <RecipeItem />
      </ul>
    </div>
  )
}

function RecipeItem() {
  return recipes.map((recipe, index) => (
    <li key={index}>
      <h2 className="bg-amber-400">{recipe.name}</h2>
      <ul key={index}>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </li>
  ))
}
