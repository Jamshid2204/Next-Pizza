import { Categories, Container, Filters, SortPopup, Title, Topbar } from "@/components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все Пиццы" size="lg" className="font-extrabold" />

      </Container>
      <Topbar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Filter */}
          <div className="w-[250]">
            <Filters/>
          </div>

          {/* Products list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Products list</div>
          </div>
        </div>
      </Container>

    </>

  );
}
