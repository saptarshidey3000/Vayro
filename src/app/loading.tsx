export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-primary/20" />
          <div className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
        <p className="text-xs font-mono font-medium tracking-wider text-muted-foreground uppercase">
          Initializing telemetry...
        </p>
      </div>
    </div>
  );
}
