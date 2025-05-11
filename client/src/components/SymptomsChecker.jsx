function SymptomsChecker() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Check Symptoms</h1>
      <p className="mt-4">Tell us about your symptoms, and we'll suggest possible gene markers at risk.</p>
      <form className="mt-6">
        <div className="space-y-4">
          <label className="block">Symptom 1</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />

          <label className="block">Symptom 2</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />

          <label className="block">Symptom 3</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mt-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md">Analyze Symptoms</button>
        </div>
      </form>
    </div>
  );
}

export default SymptomsChecker;
