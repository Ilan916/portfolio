export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/3 rounded bg-foreground/10" />
        <div className="h-4 w-1/2 rounded bg-foreground/10" />
        <div className="h-4 w-2/3 rounded bg-foreground/10" />
        <div className="h-64 w-full rounded bg-foreground/10" />
      </div>
    </div>
  );
}


