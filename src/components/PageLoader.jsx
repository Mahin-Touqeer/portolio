function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f7f1]">
      <div className="flex flex-col items-center gap-4">
        {/* Logo / Name */}
        <span className="text-3xl font-bold text-[#194643]">Loading ...</span>

        {/* Loader dots */}
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#194643] animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#194643] animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
