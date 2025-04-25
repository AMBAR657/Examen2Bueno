import { useMovies } from "../context/MovieContext";

export default function MovieFilters() {
  const { filter, setFilter } = useMovies();

  const handleChange = e => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 mb-6 w-1/4">
      <h2 className="text-lg font-semibold mb-4">Filtros</h2>
      <table className="w-full table-auto">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-medium">Título:</td>
            <td className="px-4 py-2">
              <input
                name="title"
                value={filter.title}
                onChange={handleChange}
                placeholder="Buscar por título"
                className="w-full px-4 py-2 rounded-lg border"
              />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium">Género:</td>
            <td className="px-4 py-2">
              <input
                name="genre"
                value={filter.genre}
                onChange={handleChange}
                placeholder="Buscar por género"
                className="w-full px-4 py-2 rounded-lg border"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
