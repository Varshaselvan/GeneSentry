function Result() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Analysis Results</h1>
      <div className="mt-4">
        <p><strong>Risk Level:</strong> High</p>
        <p><strong>Mutation Detected:</strong> BRCA1 gene mutation</p>
        <p className="mt-6">We recommend you consult a genetic counselor for further analysis.</p>
      </div>
    </div>
  );
}

export default Result;
