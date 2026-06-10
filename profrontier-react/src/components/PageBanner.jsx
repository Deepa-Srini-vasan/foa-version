import { Link } from 'react-router-dom';

export default function PageBanner({ title, description, category, breadcrumbs = [] }) {
  return (
    <section className="page-banner" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {breadcrumbs.length > 0 && (
          <div className="page-banner__breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumbs.map((bc, idx) => (
              <span key={idx}>
                {' '}•{' '}
                {bc.to ? <Link to={bc.to}>{bc.label}</Link> : <span>{bc.label}</span>}
              </span>
            ))}
          </div>
        )}
        {category && <span className="section__tag page-banner__tag">{category}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
