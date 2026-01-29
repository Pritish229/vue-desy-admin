// Wrapper for displaying a single component example
export function ShowcaseItem({ title, description, children }) {
  return (
    <div className="card bg-base-100 border border-base-300">
      <div className="card-body p-4">
        <h4 className="font-semibold text-sm">{title}</h4>
        {description && (
          <p className="text-xs text-base-content/60">{description}</p>
        )}
        <div className="mt-3 p-4 bg-base-200 rounded-lg flex flex-wrap items-center gap-3">
          {children}
        </div>
      </div>
    </div>
  );
}

// Section wrapper for grouping related examples
export function ShowcaseSection({ title, description, children }) {
  return (
    <section className="space-y-4">
      <div className="border-b border-base-300 pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        {description && (
          <p className="text-sm text-base-content/70 mt-1">{description}</p>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

// Full page wrapper
export function ShowcasePage({ title, description, children }) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        {description && (
          <p className="text-base-content/70 mt-2">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
