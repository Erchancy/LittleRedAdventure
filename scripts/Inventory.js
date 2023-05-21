export const openInventory = () => {
  const inventoryButton = document.getElementById("overlay")
  inventoryButton.classList.add("open")
}

export const closeInventory = () => {
  const inventoryButton = document.getElementById("overlay")
  inventoryButton.classList.remove("open")
}
  