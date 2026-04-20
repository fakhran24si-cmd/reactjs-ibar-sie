import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div>
      <PageHeader title="Customers" breadcrumb="Dashboard / Customer List">
        <button className="rounded-lg bg-green-500 px-4 py-2 text-white font-bold hover:bg-green-600 transition-colors">
          Add New Customer
        </button>
      </PageHeader>

      {/* Isi tabel data JSON 30 barismu di sini */}
    </div>
  );
}
