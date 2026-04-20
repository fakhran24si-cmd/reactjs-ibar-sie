export default function ErrorPage({ code, message, icon }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
      <span className="text-8xl mb-4">{icon}</span>
      <h1 className="text-6xl font-black text-gray-800">{code}</h1>
      <p className="text-xl text-gray-500 mt-2">{message}</p>
      <a href="/" className="mt-6 text-green-600 font-bold hover:underline">
        Kembali ke Dashboard
      </a>
    </div>
  );
}
