import { useMovies } from "../context/MovieContext";
import { useState, useEffect } from "react";

export default function MovieForm() {
  const { addMovie, updateMovie, editingMovie, setEditingMovie } = useMovies();
  const [form, setForm] = useState({ title: "", description: "", genre: "" });

  useEffect(() => {
    if (editingMovie) setForm(editingMovie);
  }, [editingMovie]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingMovie) {
      updateMovie(form);
      setEditingMovie(null);
    } else {
      addMovie(form);
    }
    setForm({ title: "", description: "", genre: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">{editingMovie ? "Editar Película" : "Agregar Película"}</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Título"
        className="w-full px-4 py-2 rounded-lg border mb-3"
        required
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descripción"
        className="w-full px-4 py-2 rounded-lg border mb-3"
        required
      />
      <input
        name="genre"
        value={form.genre}
        onChange={handleChange}
        placeholder="Género"
        className="w-full px-4 py-2 rounded-lg border mb-3"
        required
      />
      <div className="flex justify-between">
        <button type="submit" className="px-4 py-2 rounded-lg border">
          {editingMovie ? "Actualizar" : "Agregar"}
        </button>
        {editingMovie && (
          <button type="button" onClick={() => setEditingMovie(null)} className="underline">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
