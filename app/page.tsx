import { Categories, Container } from "@/components/shared";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все Пиццы" size="lg" className="font-extrabold"/>

        <Categories/>
      </Container>
    </>
    
  );
}
