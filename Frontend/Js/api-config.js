// When the frontend is served by ASP.NET, use the same origin and therefore
// the current port. The fallback is only for opening the HTML files directly.
const API_BASE_URL = window.location.protocol === 'http:' ||
        window.location.protocol === 'https:' ?
    window.location.origin :
 'https://localhost:54888';

function apiUrl(path) {
  return `${API_BASE_URL}${path}`;
}