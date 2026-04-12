import React, { useState } from "react";

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3.5 h-3.5 ${i < full ? "text-amber-400" : i === full && half ? "text-amber-300" : "text-gray-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-500 ml-1 font-medium">{rating}</span>
    </div>
  );
};

const TypeBadge = ({ type }) => {
  const colors = {
    Pemerintah: "bg-blue-100 text-blue-700",
    Swasta: "bg-emerald-100 text-emerald-700",
    Khusus: "bg-purple-100 text-purple-700",
  };
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors[type] || "bg-gray-100 text-gray-600"}`}
    >
      {type}
    </span>
  );
};

const HospitalCard = ({ hospital }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <TypeBadge type={hospital.type} />
        </div>
        {hospital.emergency && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
            24 JAM
          </span>
        )}
        <div className="absolute bottom-3 left-3">
          <StarRating rating={hospital.rating} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-base leading-tight mb-1 line-clamp-2 group-hover:text-teal-600 transition-colors">
          {hospital.name}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 text-teal-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>
            {hospital.address.city}, {hospital.address.province}
          </span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
          {hospital.description}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-teal-50 rounded-xl p-2 text-center">
            <div className="text-teal-700 font-bold text-sm">
              {hospital.beds}
            </div>
            <div className="text-teal-500 text-xs">Tempat Tidur</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-2 text-center">
            <div className="text-blue-700 font-bold text-sm">
              {hospital.doctors.length}
            </div>
            <div className="text-blue-500 text-xs">Dokter</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-2 text-center">
            <div className="text-amber-700 font-bold text-xs leading-tight">
              {hospital.accreditation.split(" ")[0]}
            </div>
            <div className="text-amber-500 text-xs">Akreditasi</div>
          </div>
        </div>

        {/* Facilities tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {hospital.facilities
            .filter((f) => f.available)
            .slice(0, 3)
            .map((f) => (
              <span
                key={f.name}
                className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"
              >
                {f.name}
              </span>
            ))}
          {hospital.facilities.filter((f) => f.available).length > 3 && (
            <span className="bg-gray-100 text-gray-400 text-xs px-2 py-0.5 rounded-full">
              +{hospital.facilities.filter((f) => f.available).length - 3} lagi
            </span>
          )}
        </div>

        {/* BPJS badge */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${hospital.bpjs ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
          >
            {hospital.bpjs ? "✓ Menerima BPJS" : "Non-BPJS"}
          </span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-teal-600 hover:text-teal-800 font-medium transition-colors flex items-center gap-1"
          >
            {expanded ? "Sembunyikan" : "Lihat dokter"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Expanded doctors */}
        {expanded && (
          <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
            {hospital.doctors.map((doc, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-gray-50 rounded-lg p-2"
              >
                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">
                    {doc.name}
                  </div>
                  <div className="text-xs text-teal-600">{doc.specialist}</div>
                  <div className="text-xs text-gray-400">{doc.schedule}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalCard;
