const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };
   
  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
   
  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };
   
  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };
   
  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };
   
  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };
   
  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };
   
  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };
   
  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };
   
  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };
   
  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };
   
  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return(
    <main className = "m-4">
        <Item
         name ={item1.name}
         quantity={item1.quantity}
         catagory={item1.catagory}
        />
        <Item
         name ={item2.name}
         quantity={item2.quantity}
         catagory={item2.catagory}
        />
        <Item
         name ={item3.name}
         quantity={item3.quantity}
         catagory={item3.catagory}
        />
        <Item
         name ={item4.name}
         quantity={item4.quantity}
         catagory={item4.catagory}
        />
        <Item
         name ={item5.name}
         quantity={item5.quantity}
         catagory={item5.catagory}
        />
        <Item
         name ={item6.name}
         quantity={item6.quantity}
         catagory={item6.catagory}
        />
        <Item
         name ={item7.name}
         quantity={item7.quantity}
         catagory={item7.catagory}
        />
        <Item
         name ={item8.name}
         quantity={item8.quantity}
         catagory={item8.catagory}
        />
        <Item
         name ={item9.name}
         quantity={item9.quantity}
         catagory={item9.catagory}
        />
        <Item
         name ={item10.name}
         quantity={item10.quantity}
         catagory={item10.catagory}
        />
        <Item
         name ={item11.name}
         quantity={item11.quantity}
         catagory={item11.catagory}
        />
        <Item
         name ={item12.name}
         quantity={item12.quantity}
         catagory={item12.catagory}
        />

    </main>
  )