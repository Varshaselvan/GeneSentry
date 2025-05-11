function GeneInput() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Gene Sequence Input</h1>
      <p className="mt-4">Enter your DNA sequence below (raw string or upload a file).</p>
      <form className="mt-6">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Paste DNA sequence here..."
          rows="10"
        ></textarea>
        <div className="mt-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md">Analyze</button>
        </div>
      </form>
    </div>
  );
}

export default GeneInput;
