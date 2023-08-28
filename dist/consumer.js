"use strict";
// Dada Ki Jay Ho
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const consumer = client_1.default.consumer({ groupId: "apna-surat-ka-grp" });
        yield consumer.connect();
        yield consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });
        yield consumer.run({
            eachMessage: ({ topic, partition, message, heartbeat, pause }) => __awaiter(this, void 0, void 0, function* () {
                console.log(topic, partition, heartbeat, {
                    key: message.key.toString(),
                    value: message.value.toString(),
                    headers: message.headers,
                });
            }),
        });
    });
}
init();
