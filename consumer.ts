// Dada Ki Jay Ho

import kafka from "./client";

async function init() {
  const consumer = kafka.consumer({ groupId: "apna-surat-ka-grp" });

  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(topic, partition, heartbeat, {
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
}

init();
