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
// creating producer
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const producer = client_1.default.producer();
        console.log("Connecting to producer...");
        yield producer.connect();
        console.log("Conected to producer successfully!");
        const rider1 = { name: "raj", loc: "surat" };
        const rider2 = { name: "samir", loc: "ahmedabad" };
        const rider = Math.random() < 0.5 ? rider1 : rider2;
        yield producer.send({
            topic: "rider-updates",
            messages: [
                {
                    partition: rider.loc.toLowerCase() === "surat" ? 0 : 1,
                    key: rider.name,
                    value: rider.loc,
                },
            ],
        });
        yield producer.disconnect();
    });
}
init();
