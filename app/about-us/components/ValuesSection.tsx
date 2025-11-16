export default function ValuesSection() {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Our Values</h2>
      <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Commitment to excellence and quality</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Innovation and creativity</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Community building and collaboration</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Integrity and transparency</span>
        </li>
      </ul>
    </div>
  );
}

