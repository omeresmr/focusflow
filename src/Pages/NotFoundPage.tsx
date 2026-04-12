export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-20 min-h-[70vh]">
      <h1 className="text-8xl font-bold tracking-tighter leading-none mb-2 bg-linear-to-br from-sky-600 to-purple-600 dark:from-sky-400 dark:to-purple-400 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
        Page not found
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-9">
        This page doesn't exist or has been moved.
      </p>
    </div>
  );
}
