import MenuItem from "./MenuItem";

function MenuList({ menuItems, index }) {
  const { title, itemCards } = menuItems;

  return (
    <section id={`section-${index + 1}`}>
      <h4>{`${title} (${itemCards.length})`} </h4>
      <div className="table_wrapper">
        <table className="table table-borderless cart-list menu-gallery">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th className="text-center">Order</th>
            </tr>
          </thead>
          <tbody>
            {itemCards.map((item, key) => {
              return <MenuItem itemCards={item} key={key} index={key + 1} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MenuList;
