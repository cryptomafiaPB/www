import Wrapper from '@/components/Wrapper';

export default function Page() {
  return (
    <Wrapper as="main">
      <section className="w-full relative">
        <div className="w-full flex flex-col gap-5 fixed"></div>
      </section>
      <div className="w-full flex flex-col bg-yellow-500">
        <div className="w-full h-[500px]">test</div>
        <div className="w-full h-[500px]">test</div>
      </div>
    </Wrapper>
  );
}
