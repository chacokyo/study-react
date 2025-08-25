import { recipes } from './data.js'

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        // 모든 recipe의 props 전달
        // key가 주변 배열에서 필요함
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  )
}

function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}
