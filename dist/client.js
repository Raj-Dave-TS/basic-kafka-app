"use strict";
// Dada Ki Jay Ho
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
exports.default = new kafkajs_1.Kafka({
    clientId: "my-kafka-app",
    brokers: ["192.168.57.243:9092"],
});
