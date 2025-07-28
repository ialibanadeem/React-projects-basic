// data.js

const menuData = [
  {
    title: "Dashboard",
  },
  {
    title: "Products",
    children: [
      { title: "Add Product" },
      { title: "Product List" },
    ],
  },
  {
    title: "Orders",
    children: [
      { title: "Pending Orders" },
      { title: "Completed Orders" },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        title: "Account",
        children: [
          { title: "Profile" },
          { title: "Security" },
        ],
      },
      { title: "Preferences" },
    ],
  },
];

export default menuData;
