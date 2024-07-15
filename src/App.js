import './Components/categories.styles.scss';
import categories from "./Components/categories.items.js"
import CategoryItem from "./Components/category-item-component.jsx";

function App() {


  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;