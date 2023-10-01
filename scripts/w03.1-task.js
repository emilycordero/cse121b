let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;
function isHit() {
  // should return true if a randomly generated number is greater than .5, false if it is less than .5
  let random = Math.random(0,1);
  if (random > 0) {
      random = true
      return random;
  } else {
      random = false
      return random;
  }

  // return Math.random() > 0.5;
}

function shipCanFire() {
  // return true if the ships health is above 0 AND ammo is above 0 false otherwise
  if (shipAmmo > 0 && shipHealth > 0) {
      return true;
  } else {
      console.log('Cannot fire.');
  }
}
function isDestroyed(health) {
  // return true if health is zero or less
  if (health <= 0){
      return true
  } else {
      return false
  }
}
function reloadShip() {
  // reduce ship health by 1 and increase ammo by 3
  shipHealth--;
  shipAmmo += 3;
}
function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}
function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

