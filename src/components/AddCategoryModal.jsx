import { useState } from "react";
import Modal from "./Modal";

const AddCategoryModal = ({ onClose, onAddCategory }) => {
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (category.trim()) {
      onAddCategory(category);
      onClose();
    } else {
      alert("Preencha o nome da categoria.");
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold">Adicionar Categoria</h2>
      <input
        type="text"
        placeholder="Nome da Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full rounded-md"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
        Adicionar
      </button>
    </Modal>
  );
};

export default AddCategoryModal;