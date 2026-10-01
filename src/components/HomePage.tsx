import { Button } from "@/components/Button";

export function HomePage() {
  return (
    <main className="app-column">
      <header className="flex flex-col gap-2">
        <h1 className="m-0 text-center text-title font-semibold">人格色谱</h1>
        <p className="m-0 text-center text-body">
          21个问题，生成属于你的专属颜色。
        </p>
      </header>
      <div className="anchor-blend" aria-hidden="true">
        <span className="anchor-blend__spot anchor-blend__spot--dong" />
        <span className="anchor-blend__spot anchor-blend__spot--he" />
        <span className="anchor-blend__spot anchor-blend__spot--zhi" />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Button aria-describedby="home-entry-hint">开始测试</Button>
        <p className="m-0 text-center text-body" id="home-entry-hint">
          请使用你的测试链接进入。
        </p>
      </div>
    </main>
  );
}
