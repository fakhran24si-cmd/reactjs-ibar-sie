export default function PageHeader({ title, breadcrumb, children }) {
  // Logika untuk menangani breadcrumb baik berupa string maupun array
  const renderBreadcrumb = () => {
    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <span key={index} className="flex items-center space-x-2">
          <span className="text-gray-500">{item}</span>
          {index < breadcrumb.length - 1 && (
            <span className="text-gray-400">/</span>
          )}
        </span>
      ));
    }
    return <span className="text-gray-500">{breadcrumb}</span>;
  };

  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4 bg-white rounded-xl mb-6"
    >
      <div id="pageheader-left" className="flex flex-col">
        {/* Menggunakan props title */}
        <span
          id="pageheader-title"
          className="text-3xl font-semibold text-gray-900"
        >
          {title}
        </span>

        <div
          id="breadcrumb-links"
          className="mt-2 flex items-center space-x-2 font-medium text-sm"
        >
          {renderBreadcrumb()}
        </div>
      </div>

      <div id="action-button">
        {/* Menggunakan props children untuk tombol dinamis */}
        {children}
      </div>
    </div>
  );
}
