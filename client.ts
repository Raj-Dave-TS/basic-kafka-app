// Dada Ki Jay Ho

import { Kafka } from "kafkajs";

export default new Kafka({
  clientId: "my-kafka-app",
  brokers: ["192.168.57.243:9092"],
});
