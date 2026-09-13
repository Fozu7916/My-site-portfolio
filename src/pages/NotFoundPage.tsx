import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="not-found page-shell">
      <span className="eyebrow">404 / Off route</span>
      <h1>This path ends in the mist.</h1>
      <p>The page may have moved as part of the portfolio’s new architecture.</p>
      <Link className="button button--primary" to="/">Return home</Link>
    </div>
  );
}
