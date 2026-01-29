import ThemeSwitcher from "../../../components/ThemeSwitcher";
import PageHeader from "../../../components/PageHeader";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Customize the admin panel theme and basic interface preferences."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-sm border border-base-200 lg:col-span-2">
          <div className="card-body space-y-4">
            <h2 className="card-title text-base">Appearance</h2>
            <p className="text-xs text-base-content/60">
              Choose between light, dark and custom admin theme. This updates
              the <code>data-theme</code> attribute for DaisyUI.
            </p>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body space-y-4">
            <h2 className="card-title text-base">UI Preferences</h2>
            <div className="form-control">
              <label className="label cursor-pointer justify-between">
                <span className="label-text">Compact table density</span>
                <input type="checkbox" className="toggle toggle-sm" defaultChecked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-between">
                <span className="label-text">Show advanced filters</span>
                <input type="checkbox" className="toggle toggle-sm" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-between">
                <span className="label-text">Enable notifications</span>
                <input type="checkbox" className="toggle toggle-sm" defaultChecked />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

