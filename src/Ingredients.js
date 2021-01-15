const ingredients = [
  {
    group: 'Graham Cracker Crust',
    items: [
      `1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)`,
      `5 Tablespoons (70g) <b>unsalted butter</b>, melted`,
      `1/4 cup (50g) <b>granulated sugar</b>`,
    ],
  },
  {
    group: 'Cheesecake',
    items: [
      `four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature`,
      `1 cup (200g) <b>granulated sugar</b>`,
      `1 cup (240g) full-fat <b>sour cream</b>, at room temperature`,
      `1 teaspoon <b>pure vanilla extract</b>`,
      `2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)`,
      `3 large <b>eggs</b>, at room temperature`,
      `topping suggestions: <i>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</i> (recipe in notes) `,
    ],
  },
]

const IngredientGroup = ({ name, items }) => (
  <>
    <h2 className="font-serif text-lg italic">{name}</h2>
    <div className="grid gap-2">
      {items.map((item, index) => (
        <div className="grid grid-flow-col auto-cols-auto gap-4 justify-start">
          <input
            className="appearance-none border border-gray-400 rounded checked:bg-yellow-500 checked:border-transparent w-5 h-5"
            type="checkbox"
            id={name + index}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
            }}
          />
          <label
            htmlFor={name + index}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        </div>
      ))}
    </div>
  </>
)

const Ingredients = () => (
  <>
    {ingredients.map(({ group, items }) => (
      <IngredientGroup name={group} items={items} />
    ))}
  </>
)

export default Ingredients
