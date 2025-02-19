const Categories = ({ categories }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Categorias</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;