export default function StatCard({ label, value, trendLabel, trendValue, icon: Icon }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200">
      <div className="card-body p-4 md:p-5 gap-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-base-content/60">
              {label}
            </p>
            <p className="mt-1 text-2xl font-semibold">{value}</p>
          </div>
          {Icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
          )}
        </div>
        {trendLabel && (
          <p className="text-xs text-base-content/60">
            <span className="font-semibold text-success mr-1">
              {trendValue}
            </span>
            {trendLabel}
          </p>
        )}
      </div>
    </div>
  );
}

