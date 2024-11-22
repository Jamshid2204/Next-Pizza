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
                  name: "Чизбургер-пицца",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73C6B01E9ECAB89410716435740.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Сырный цыпленок",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED73A8D98E91C8DF6C1EDE2609B92.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Додо",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D6247650FAB9BC0FBA7E5E31424.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Пепперони",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE897382FE407EB533708A14B5D5BC.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} categoryId={1} />
              <ProductsGroupList 
              title={"Комбо"} items={[
                {
                  id: 1,
                  name: "Комбо на двоих",
                  imageUrl:"  https://media.dodostatic.net/image/r:292x292/11EF929C33D142CCBCB50A5130889E0A.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "4 закуски",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EF929BF0AC555D95A7BBEB666CF6DB.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "2 пиццы и закуска",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EF91D44DA4808C8D55736F5839E00D.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Комбо на четверых",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EF929BCAED4644979D3C2C1CD85B11.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} categoryId={2} />
              <ProductsGroupList 
              title={"Закуски"} items={[
                {
                  id: 1,
                  name: "Картофель из печи",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EF06CC0AA90AAFA505AB9EA553048E.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Картошка по-деревенски",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D628495DEB78B19FC57BD43E6FE.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Салат цезарь",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE895C0EE05346897A28071B9FE9D3.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Наггетсы",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE797074DC71F49CC2F48D8C328BD0.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} categoryId={3} />
              <ProductsGroupList 
              title={"Коктейли"} items={[
                {
                  id: 1,
                  name: "Шоколадный молочный коктейль",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE797069A2855BB6F84B3DB7C466D7.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Банановый Коктейль",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EF3ABD429F5BC28FFC21122B80F082.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Клубничный Коктейль",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EF3AC1E51385409F61D3272A1E01C3.avif",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Карамельный молочный коктейль",
                  imageUrl:"https://media.dodostatic.net/image/r:292x292/11EED7372DCDA99890AD62D68B1AB6B0.avif",
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
