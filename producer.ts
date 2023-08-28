// Dada Ki Jay Ho

import kafka from "./client";
import IRider from "./irider";

// creating producer
async function init() {
  const producer = kafka.producer();

  console.log("Connecting to producer...");
  await producer.connect();
  console.log("Conected to producer successfully!");

  const rider1: IRider = { name: "raj", loc: "surat" };
  const rider2: IRider = { name: "samir", loc: "ahmedabad" };

  const rider: IRider = Math.random() < 0.5 ? rider1 : rider2;
  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: rider.loc.toLowerCase() === "surat" ? 0 : 1,
        key: rider.name,
        value: rider.loc,
      },
    ],
  });

  await producer.disconnect();
}

init();
