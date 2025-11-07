import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const swatches = [
  { name: "Primary", var: "--primary" },
  { name: "Secondary", var: "--secondary" },
  { name: "Accent", var: "--accent" },
  { name: "Muted", var: "--muted" },
  { name: "Border", var: "--border" },
];

export default function StylePage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Style Guide</h1>
      <p className="mt-2 text-muted-foreground">Brand tokens and components preview.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Colors</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {swatches.map(s => (
              <div key={s.name} className="flex items-center gap-3">
                <div className="size-10 rounded-lg border" style={{ backgroundColor: `hsl(var(${s.var}))`}} />
                <div>
                  <div className="text-sm font-medium">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.var}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Typography</CardTitle></CardHeader>
          <CardContent>
            <h1 className="text-4xl font-extrabold">Off We Go</h1>
            <p className="mt-2 text-muted-foreground">Wrightsville Beach & Cape Fear</p>
            <p className="mt-4">Body copy example with <a className="underline" href="#">links</a> and <strong>bold</strong>.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
