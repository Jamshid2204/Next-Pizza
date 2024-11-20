import { Categories, Container, Filters, SortPopup, Title, Topbar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все Пиццы" size="lg" className="font-extrabold" />

      </Container>
      <Topbar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Filter */}
          <div className="w-[250]">
            <Filters/>
          </div>

          {/* Products list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
              title={"Пиццы"} items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца1",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Чизбургер-пицц2",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} categoryId={1} />
              <ProductsGroupList 
              title={"Комбо"} items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца1",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Чизбургер-пицц2",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} categoryId={2} />
              <ProductsGroupList 
              title={"Закуски"} items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца1",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Чизбургер-пицц2",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} categoryId={3} />
              <ProductsGroupList 
              title={"Коктейли"} items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца1",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Чизбургер-пицц2",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} categoryId={4} />
            </div>
          </div>
        </div>
      </Container>

    </>

  );
}
