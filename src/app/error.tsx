"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Phase 01: Log critical errors safely without exposing secrets
    console.error("VAYRO Uncaught Exception:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-sm space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <span className="text-xl font-bold">!</span>
        </div>
        <h2 className="text-xl font-bold text-foreground">System Exception</h2>
        <p className="text-sm text-muted-foreground">
          An unexpected error interrupted system operations.
        </p>
        <div className="pt-2">
          <Button onClick={() => reset()} className="w-full">
            Attempt Recovery
          </Button>
        </div>
      </div>
    </div>
  );
}
