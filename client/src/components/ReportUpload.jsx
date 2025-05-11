function ReportUpload() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Upload Medical Report</h1>
      <p className="mt-4">Upload your medical report image or PDF.</p>
      <form className="mt-6">
        <input
          type="file"
          accept="image/*,application/pdf"
          className="p-2 border border-gray-300 rounded-md"
        />
        <div className="mt-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md">Upload & Analyze</button>
        </div>
      </form>
    </div>
  );
}

export default ReportUpload;
