export default function ResponsiveTable({ columns, data, keyField = "id" }) {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
          <table className="table table-zebra">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="text-xs font-semibold uppercase">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row[keyField]}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="grid gap-3 md:hidden">
        {data.map((row) => (
          <div
            key={row[keyField]}
            className="card bg-base-100 border border-base-200 shadow-sm"
          >
            <div className="card-body p-4 space-y-2">
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="text-xs font-medium uppercase text-base-content/60">
                    {col.label}
                  </span>
                  <span className="text-right">
                    {col.render ? col.render(row) : row[col.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

