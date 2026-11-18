import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Compass, Radio, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Brand Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Phase 01: Engineering Foundation
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            VAYRO
          </h1>
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Move As One.
          </p>
        </div>

        {/* Foundational Status Card */}
        <Card className="text-left">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Technical Foundation Status</CardTitle>
            <CardDescription>
              Core architecture, design tokens, and engineering standards established.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-muted-foreground">
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <span className="flex items-center gap-2 text-foreground font-medium">
                <Compass className="h-4 w-4 text-primary" /> Architecture
              </span>
              <span>Next.js App Router & TypeScript</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <span className="flex items-center gap-2 text-foreground font-medium">
                <Radio className="h-4 w-4 text-primary" /> Design System
              </span>
              <span>Automotive Dark & Tokens</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <span className="flex items-center gap-2 text-foreground font-medium">
                <Users className="h-4 w-4 text-primary" /> UI Primitives
              </span>
              <span>shadcn/ui & Lucide Icons</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-foreground font-medium">
                <ShieldCheck className="h-4 w-4 text-primary" /> Quality Gate
              </span>
              <span className="text-primary font-semibold">Verified</span>
            </div>
          </CardContent>
        </Card>

        {/* Foundation Action Button */}
        <div className="pt-2">
          <Button size="lg" className="w-full">
            Foundation Ready
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Awaiting Phase 02: Design System and UI Foundation
          </p>
        </div>
      </div>
    </main>
  );
}
