import PageHeader from "../../../components/PageHeader";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Currency Dashboard"
        description="Track exchange rates, currency allocation and recent conversions."
      />

      {/* Header stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="stat bg-gradient-to-br from-base-100 to-base-200 shadow rounded-2xl border border-base-200">
          <div className="stat-figure text-primary">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-semibold text-primary">$</span>
            </div>
          </div>
          <div className="stat-title">Total Balance</div>
          <div className="stat-value text-primary">$42,380</div>
          <div className="stat-desc text-success">↗︎ +$1,250 today</div>
        </div>

        <div className="stat bg-gradient-to-br from-base-100 to-base-200 shadow rounded-2xl border border-base-200">
          <div className="stat-figure text-secondary">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <span className="text-lg font-semibold text-secondary">€</span>
            </div>
          </div>
          <div className="stat-title">EUR Holdings</div>
          <div className="stat-value text-secondary">€18,900</div>
          <div className="stat-desc">Converted from USD</div>
        </div>

        <div className="stat bg-gradient-to-br from-base-100 to-base-200 shadow rounded-2xl border border-base-200">
          <div className="stat-figure text-success">
            <span className="badge badge-success">Stable</span>
          </div>
          <div className="stat-title">Avg. Daily Change</div>
          <div className="stat-value">+0.8%</div>
          <div className="stat-desc text-success">↗︎ vs last week</div>
        </div>

        <div className="stat bg-gradient-to-br from-base-100 to-base-200 shadow rounded-2xl border border-base-200">
          <div className="stat-figure text-info">
            <span className="badge badge-info">Today</span>
          </div>
          <div className="stat-title">Conversions</div>
          <div className="stat-value">32</div>
          <div className="stat-desc text-info">Last 24 hours</div>
        </div>
      </div>

      {/* Line chart + pie chart row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Exchange rate line chart */}
        <div className="xl:col-span-2 card bg-base-100 shadow rounded-2xl p-6 h-[420px] flex flex-col">
          <div className="flex justify-between mb-4 items-center">
            <h2 className="text-lg font-semibold">USD to Major Currencies</h2>
            <div className="space-x-2">
              <button className="btn btn-xs btn-primary">7D</button>
              <button className="btn btn-xs btn-ghost">1M</button>
              <button className="btn btn-xs btn-ghost">3M</button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs mb-4 flex-wrap">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" /> USD → EUR
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary" /> USD → GBP
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400" /> USD → JPY
            </span>
          </div>

          {/* Simple SVG line chart (static mock data) */}
          <div className="flex-1 min-h-0">
            <svg viewBox="0 0 400 160" className="w-full h-full rounded-xl bg-base-200 p-4">
              {/* grid lines */}
              {[1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="32"
                  x2="380"
                  y1={30 + i * 25}
                  y2={30 + i * 25}
                  className="stroke-base-300"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
              ))}

              {/* EUR line */}
              <polyline
                fill="none"
                strokeWidth="3"
                className="stroke-primary"
                points="32,130 90,110 150,105 210,95 270,85 330,80 380,78"
              />

              {/* GBP line */}
              <polyline
                fill="none"
                strokeWidth="3"
                className="stroke-secondary"
                points="32,120 90,115 150,112 210,108 270,102 330,98 380,96"
              />

              {/* JPY line */}
              <polyline
                fill="none"
                strokeWidth="3"
                className="stroke-amber-400"
                points="32,140 90,132 150,128 210,122 270,118 330,110 380,104"
              />

              {/* x-axis labels */}
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((label, index) => {
                const x = 32 + index * 50;
                return (
                  <text
                    key={label}
                    x={x}
                    y={152}
                    textAnchor="middle"
                    className="fill-base-content/60 text-[10px]"
                  >
                    {label}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Currency allocation pie chart */}
        <div className="card bg-base-100 shadow rounded-2xl p-6 flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-4">Currency Allocation</h2>

          <div className="flex flex-1 items-center gap-6 flex-col lg:flex-row">
            <div className="relative w-40 h-40 mx-auto">
              <div
                className="w-40 h-40 rounded-full shadow-inner"
                style={{
                  backgroundImage:
                    "conic-gradient(#4f46e5 0deg 160deg, #f97316 160deg 260deg, #22c55e 260deg 320deg, #e5e7eb 320deg 360deg)",
                }}
              />
              <div className="absolute inset-6 rounded-full bg-base-100 flex flex-col items-center justify-center text-xs">
                <span className="text-base-content/60">Total</span>
                <span className="font-semibold">$42,380</span>
              </div>
            </div>

            <div className="space-y-3 text-sm w-full lg:w-auto">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span>USD</span>
                </div>
                <span className="font-medium">$24,000 · 55%</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span>EUR</span>
                </div>
                <span className="font-medium">€10,500 · 25%</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span>GBP</span>
                </div>
                <span className="font-medium">£5,300 · 15%</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-base-300" />
                  <span>Other</span>
                </div>
                <span className="font-medium">$2,580 · 5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress + table */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Savings goals */}
        <div className="card bg-base-100 shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Savings Goals</h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Emergency Fund (USD)</span>
                <span>80%</span>
              </div>
              <progress className="progress progress-primary w-full" value="80" max="100" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Europe Trip (EUR)</span>
                <span>55%</span>
              </div>
              <progress className="progress progress-secondary w-full" value="55" max="100" />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>UK Budget (GBP)</span>
                <span>35%</span>
              </div>
              <progress className="progress progress-info w-full" value="35" max="100" />
            </div>
          </div>
        </div>

        {/* Recent currency conversions */}
        <div className="card bg-base-100 shadow rounded-2xl p-6">
          <div className="flex justify-between mb-4 items-center">
            <h2 className="text-lg font-semibold">Recent Conversions</h2>
            <button className="btn btn-sm btn-outline">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>From → To</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>USD → EUR</td>
                  <td>0.92</td>
                  <td>$1,250</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>USD → GBP</td>
                  <td>0.78</td>
                  <td>$840</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>EUR → JPY</td>
                  <td>161.20</td>
                  <td>€430</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

