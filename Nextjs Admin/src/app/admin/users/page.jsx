import ResponsiveTable from "../../../components/ResponsiveTable";
import PageHeader from "../../../components/PageHeader";

const users = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    role: "Admin",
    status: "Active",
    plan: "Enterprise",
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    role: "Editor",
    status: "Active",
    plan: "Pro",
  },
  {
    id: 3,
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    role: "Viewer",
    status: "Invited",
    plan: "Free",
  },
  {
    id: 4,
    name: "Devon Lane",
    email: "devon.lane@example.com",
    role: "Editor",
    status: "Suspended",
    plan: "Pro",
  },
];

const columns = [
  {
    key: "name",
    label: "User",
    render: (row) => (
      <div className="flex flex-col">
        <span className="font-medium text-sm">{row.name}</span>
        <span className="text-xs text-base-content/60">{row.email}</span>
      </div>
    ),
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "plan",
    label: "Plan",
    render: (row) => (
      <span className="badge badge-outline badge-sm">{row.plan}</span>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: (row) => {
      let color = "badge-ghost";
      if (row.status === "Active") color = "badge-success";
      if (row.status === "Suspended") color = "badge-error";
      if (row.status === "Invited") color = "badge-warning";
      return (
        <span className={`badge badge-sm ${color}`}>
          {row.status}
        </span>
      );
    },
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        description="Manage your application users with responsive table and card layouts."
        rightSlot={
          <button className="btn btn-primary btn-sm">
            Add user
          </button>
        }
      />

      <ResponsiveTable columns={columns} data={users} />
    </div>
  );
}

