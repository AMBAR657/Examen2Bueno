import { useMovies } from "../context/MovieContext";

export default function MovieCard({ movie }) {
  const { deleteMovie, toggleFavorite, setEditingMovie } = useMovies();

  return (
    <div className="px-4 py-4 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <button onClick={() => toggleFavorite(movie.id)}>
          {movie.favorite ? "+" : "-"}
        </button>
      </div>
      <p className="text-sm">{movie.description}</p>
      <p className="text-xs mt-1">Género: {movie.genre}</p>
      <div className="mt-3 flex gap-3">
        <button onClick={() => setEditingMovie(movie)}>Editar</button>
        <button onClick={() => deleteMovie(movie.id)}>Eliminar</button>
      </div>
    </div>
  );
}

