import { useState } from "react";
import Modal from "./Modal";

const AddExpenseModal = ({ onClose, onAddExpense, categories }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0] || "");

  const handleSubmit = () => {
    if (description.trim() && amount.trim() && category) {
      onAddExpense({ description, amount, category });
      onClose();
    } else {
      alert("Preencha todos os campos.");
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold">Adicionar Gasto</h2>
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full rounded-md"
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mt-2 rounded-md"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mt-2 rounded-md"
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
        Adicionar
      </button>
    </Modal>
  );
};

export default AddExpenseModal;