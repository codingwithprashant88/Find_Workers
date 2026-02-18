import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

function FindJob() {
  const [filters, setFilters] = useState({
    role: "",
    city: "",
    experience: "",
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
      try {
          setLoading(true)

          const query = new URLSearchParams(filters).toString();
           const url = `http://10.223.194.153:5000/find/get?${query}`;
           const response = await fetch(url)
           const data = await response.json();
           setJobs(data.All || [])
      } catch (error) {
          console.error("Failed to fetch jobs", error);
      }finally{
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchJobs();
    }, [])

  return (
    <div className="w-full">

  {/* HERO SECTION */}
  <section className="relative w-full">
    <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-2xl">
      <img
        src={`${import.meta.env.BASE_URL}findjob.png`}
        alt="jobs"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Find Your Job Here
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-200">
          Search jobs by city & category
        </p>
      </div>
    </div>
  </section>

  {/* SEARCH / FILTER SECTION */}
  <section className="mt-10 px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      
      <select value={filters.role} onChange={(e) => setFilters({...filters, role: e.target.value})} className="w-full py-3 px-4 bg-zinc-100 border border-zinc-300 rounded-xl font-medium">
        <option value="" disabled  hidden  >Job Role</option>
        <option>Labour</option>
        <option>Mason</option>
        <option>Painter</option>
        <option>Plumber</option>
        <option>Carpenter</option>
        <option>Electrician</option>
        <option>Foremen</option>
        <option>Supervisor</option>
        <option>Engineer</option>
        <option>Welder</option>
        <option>Technician</option>
      </select>

      <select value={filters.city} onChange={(e) => setFilters({...filters, city: e.target.value})} className="w-full py-3 px-4 bg-zinc-100 border border-zinc-300 rounded-xl font-medium">
        <option value="" disabled  hidden >Location</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Bengaluru</option>
        <option>Hyderabad</option>
        <option>Indore</option>
        <option>Pune</option>
        <option>Surat</option>
        <option>Jaipur</option>
        <option>Ahmedabad</option>
        <option>Chennai</option>
      </select>

      <select value={filters.experience} onChange={(e) => setFilters({...filters, experience: e.target.value})}  className="w-full py-3 px-4 bg-zinc-100 border border-zinc-300 rounded-xl font-medium">
        <option value="" disabled  hidden >Experience</option>
        <option>0–1 year</option>
        <option>2 years</option>
        <option>3 years</option>
        <option>4 years</option>
        <option>5+ years</option>
      </select>

      <button onClick={fetchJobs} className="w-full py-3 bg-blue-700 hover:bg-blue-800 transition text-white font-semibold rounded-xl">
        Search Jobs
      </button>
    </div>
  </section>

  {/* JOB CARDS */}
  <section className="mt-14 px-6">
     {loading && (
          <p className="text-center text-gray-600">
            Loading jobs...
          </p>
        )}

        {!loading && jobs.length === 0 && (
          <p className="text-center text-gray-500">
            No jobs found
          </p>
        )}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      
      {jobs.map((item) => (
        <div
          key={item._id}
          className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
        >
          <img src={item.image} alt="mason" className="w-full object-cover"/>
          <h3 className="text-lg font-semibold text-gray-900 py-1">
           {item.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Location: {item.city}
          </p>

          <div className="mt-4 flex justify-between text-sm">
            <span className="font-medium text-gray-700">₹{item.price.min} - ₹{item.price.max} / {item.price.type}</span>
            <span className="text-gray-500">{item.experience}</span>
          </div>

          <button className="mt-5 w-full py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
           <Link to={item.link}> View Details </Link>
          </button>
        </div>
      ))}

    </div>
  </section>

</div>

  );
}

export default FindJob;
