const openGoodieBasket = () => {
    const description = document.getElementById("description");
    description.classList.add("open");
  };
  
  const closeGoodieBasket = () => {
    const description = document.getElementById("description");
    description.classList.remove("open");
  };
  
  document.getElementById("basket").addEventListener("mouseenter", openGoodieBasket);
  document.getElementById("basket").addEventListener("mouseleave", closeGoodieBasket);
  