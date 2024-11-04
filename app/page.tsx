import { Container } from "@/components/shared";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все Пиццы" size="lg" className="font-extrabold"/>
      </Container>
    </>
    
  );
}
