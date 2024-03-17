const output = document.getElementById("output");

// Lab 3

function createHamburger(options) {
    let hamburger = {
      bun: options.bun || "sesame",
      garnishes: options.garnishes || [],
      cheeses: options.cheeses || [],
      sauces: options.sauces || [],
      patties: options.patties || [],
      pattyCount: options.pattyCount || 1,
      extras: options.extras || [],
    };
  
    hamburger.describe = function () {
      let description = "Here's your hamburger with ";
      description +=
        hamburger.pattyCount > 1
          ? hamburger.pattyCount + " patties, "
          : "a patty, ";
      description += hamburger.patties.join(" and ") + " patty";
      if (hamburger.patties.length > 1) description += "s";
      description += ", served on a " + hamburger.bun + " bun with ";
      if (hamburger.garnishes.length > 0) {
        description += hamburger.garnishes.join(", ") + ", ";
      }
      if (hamburger.cheeses.length > 0) {
        description += hamburger.cheeses.join(", ") + ", ";
      }
      if (hamburger.sauces.length > 0) {
        description += hamburger.sauces.join(", ") + ", ";
      }
      if (hamburger.extras.length > 0) {
        description += hamburger.extras.join(", ") + ", ";
      }
      description = description.slice(0, -2); 
      description += ".";
      return description;
    };
  
    return hamburger;
  }
  
  // usage:
  let myHamburger = createHamburger({
    bun: "whole wheat",
    garnishes: ["lettuce", "tomato"],
    cheeses: ["cheddar"],
    sauces: ["mayo", "ketchup"],
    patties: ["beef"],
    pattyCount: 2,
    extras: ["pickles", "onions"],
  });

// Set the text content of the output element to the description of the hamburger
output.textContent = myHamburger.describe();
