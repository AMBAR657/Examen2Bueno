const STORAGE_KEY = "my_movies";

export default function useMovieStorage() {
  const loadMovies = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const saveMovies = (movies) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  };

  return { loadMovies, saveMovies };
}