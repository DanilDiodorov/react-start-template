import { Meta } from '@storybook/react';
import CartProductCard from './CartProductCard';

const meta: Meta<typeof CartProductCard> = {
  title: 'Cart Product Card',
  component: CartProductCard,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    title: 'Ветровка, куртка, анорак спортивный',
    price: 3225,
    desc: 'Мужская плотная ветровка анорак без утеплителя. Демисезонная куртка с карманами techwear с капюшоном, в которой легко противостоять ветру и дождю. Все благодаря тому, что мужская куртка содержит не продуваемую, но дышащую ткань с водоотталкивающей пропиткой. На рукавах куртки манжеты, а спереди расположены карманы. Ветровка женская, мужская с капюшоном вместо кожаной или джинсовой куртки. Легкая непромокаемая и непродуваемая мужская куртка. Очень мягкая снаружи и изнутри, теплая. Анорак имеет красивый и стильный внешний вид, может использоваться как демисезонная и летняя ветровка. Куртка-анорак легкая, но достаточно плотная, чтобы защитить от ветра в прохладный день. Спортивный модный анорак с длинным рукавом идеально подойдет к брюкам карго. Ветровка подойдет школьникам в качестве занятий на физкультуре, а также для школы. Впишется в стиль редан или дрилл / drill. Куртка идеальна в походных условиях туристических походах для охоты и рыбалки. Спортивный анорак подойдет для фитнеса и занятий спорта, для активного отдыха. Отличный подарок на 23 февраля, день рождения, новый год и просто так порадовать парня, подростка, мальчика стильным модным анораком. У нас есть акции и распродажи, вы можете купить наши товары в подарок со скидкой!',
    image_url: 'https://basket-11.wbbasket.ru/vol1610/part161032/161032169/images/c516x688/1.webp',
  },
};