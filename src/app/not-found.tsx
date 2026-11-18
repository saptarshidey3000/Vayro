import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-sm space-y-4">
        <span className="text-5xl font-mono font-bold text-primary">404</span>
        <h2 className="text-xl font-bold text-foreground">Route Not Found</h2>
        <p className="text-sm text-muted-foreground">
          The requested coordinate or view is not part of this convoy route.
        </p>
        <div className="pt-2">
          <Link href="/">
            <Button variant="outline" className="w-full">
              Return to Base
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
