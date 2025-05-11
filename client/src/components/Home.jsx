function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Welcome to GeneSentry</h1>
      <p className="mt-4 text-lg">Analyze your DNA sequences and check for potential mutation risks!</p>
      <div className="mt-6">
        <p>Choose an option:</p>
        <ul className="space-y-4">
          <li>
            <Link to="/gene" className="text-blue-700 hover:underline">Analyze Gene Sequence</Link>
          </li>
          <li>
            <Link to="/report" className="text-blue-700 hover:underline">Upload Medical Report</Link>
          </li>
          <li>
            <Link to="/symptoms" className="text-blue-700 hover:underline">Check Symptoms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
