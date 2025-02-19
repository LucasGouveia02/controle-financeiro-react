// filepath: /c:/Users/lucas/Pessoal/Projeto Controle de Gastos/Frontend/controle-gastos-react/src/pages/HomePage.jsx
import { useState } from "react";
import Title from "../components/Title";
import Categories from "../components/Categories";
import Expenses from "../components/Expenses";
import AddCategoryModal from "../components/AddCategoryModal";
import AddExpenseModal from "../components/AddExpenseModal";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);

  const handleAddCategory = (category) => {
    setCategories([...categories, category]);
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Gastos</Title>
        <button onClick={() => setCategoryModalOpen(true)}>Adicionar Categoria</button>
        <button onClick={() => setExpenseModalOpen(true)}>Adicionar Gasto</button>
        <Categories categories={categories} />
        <Expenses expenses={expenses} />
      </div>
      {isCategoryModalOpen && (
        <AddCategoryModal
          onClose={() => setCategoryModalOpen(false)}
          onAddCategory={handleAddCategory}
        />
      )}
      {isExpenseModalOpen && (
        <AddExpenseModal
          onClose={() => setExpenseModalOpen(false)}
          onAddExpense={handleAddExpense}
          categories={categories}
        />
      )}
    </div>
  );
}

export default HomePage;