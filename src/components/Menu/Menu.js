import React from 'react';

const Menu = () => {
  const menu = [
    {
      categoryName: "tatli",
      items: [
        {
          itemName: "su",
          itemPrice: "9"
        },
        {
          itemName: "lo",
          itemPrice: "1",
        }
      ]
    },
    {
      categoryName: "icecek",
      items: []
    },
  ]

  return (
    <div>
      <h1>Menu</h1>
      {menu.map(category => {
        return (
          <table>
            <caption>{category.categoryName}</caption>
            <tr>
              <th></th>
            </tr>
          </table>
        )
      })}
    </div>
  )

}

export default Menu;
