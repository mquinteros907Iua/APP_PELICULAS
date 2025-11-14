import { useState } from 'react'
import './MovieApp.css'

export const MovieApp = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const API_KEY = 'API obtenida'
  const API_URL = 'https://api.themoviedb.org/3/search/movie'
  const IMG_URL = 'https://image.tmdb.org/t/p/w500'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!search.trim()) return

    setLoading(true)
    setSearched(true)
    
    try {
      const response = await fetch(`${API_URL}?query=${encodeURIComponent(search)}&api_key=${API_KEY}&language=es-ES`)
      const data = await response.json()
      setMovies(data.results || [])
    } catch (error) {
      console.error('Error al buscar películas:', error)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='title'> Buscador de Películas</h1>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Escribe una película...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className='search-button'>Buscar</button>
        </form>

        {loading && <div className='loading'>Cargando...</div>}

        {!loading && searched && movies.length === 0 && (
          <div className='no-results'>
            <p>No se encontraron resultados para "{search}"</p>
          </div>
        )}

        {!loading && movies.length > 0 && (
          <div className='movies-grid'>
            {movies.map((movie) => (
              <div key={movie.id} className='movie-card'>
                <div className='movie-poster'>
                  {movie.poster_path ? (
                    <img 
                      src={`${IMG_URL}${movie.poster_path}`} 
                      alt={movie.title}
                    />
                  ) : (
                    <div className='no-poster'>Sin imagen</div>
                  )}
                </div>
                <div className='movie-info'>
                  <h3 className='movie-title'>{movie.title}</h3>
                  <div className='movie-details'>
                    <span className='movie-year'>
                      {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                    </span>
                    <span className='movie-rating'>⭐ {movie.vote_average.toFixed(1)}</span>
                  </div>
                  <p className='movie-overview'>
                    {movie.overview || 'Sin descripción disponible'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
