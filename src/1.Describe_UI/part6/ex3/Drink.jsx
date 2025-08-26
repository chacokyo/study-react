const drinks = {
  tea: {
    part: 'leaf',
    caffein: '15–70 mg/cup',
    age: '4,000+ years',
  },
  coffee: {
    part: 'bean',
    caffein: '80–185 mg/cup',
    age: '1,000+ years',
  },
}

function Drink({ name }) {
  const drink = drinks[name]
  if (!drink) return <p>리스트에 없는 음료에요!</p>

  return (
    <section>
      <h1 className="bg-amber-500">{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{drink.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{drink.caffein}</dd>
        <dt>Age</dt>
        <dd>{drink.age}</dd>
      </dl>
    </section>
  )
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
      <Drink name="hamster" />
    </div>
  )
}
