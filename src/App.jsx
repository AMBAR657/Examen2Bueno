import { MovieProvider } from "./context/MovieContext";
import MovieForm from "./components/MovieForm";
import MovieFilters from "./components/MovieFilters";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";

export default function App() {
  return (
    <MovieProvider>
      <div className="flex max-w-7xl mx-auto p-6 gap-6">
        <div className="w-1/4">
          <MovieFilters />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center mb-6">Películas</h1>
          <MovieForm />
          <MovieList />
          <FavoriteList />
        </div>
      </div>
    </MovieProvider>
  );
}
