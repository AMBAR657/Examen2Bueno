import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const { filteredMovies } = useMovies();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Películas</h2>
      {filteredMovies.length === 0 ? (
        <p className="text-gray-500">No hay películas para mostrar.</p>
      ) : (
        filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}
