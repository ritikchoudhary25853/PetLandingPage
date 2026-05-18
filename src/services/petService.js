import { pets } from "../data/pets";

const wait = (ms = 450) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPets() {
  await wait();
  return pets;
}

export async function getPetById(id) {
  await wait(250);
  const pet = pets.find((item) => item.id === id);
  if (!pet) throw new Error("Pet not found");
  return pet;
}

export async function subscribeToNewsletter(email) {
  await wait(350);
  if (!email.includes("@")) throw new Error("Please enter a valid email.");
  return { ok: true, email };
}

export async function sendContactMessage(payload) {
  await wait(450);
  return { ok: true, payload };
}
