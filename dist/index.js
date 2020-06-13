"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var packageInfo = require("../package.json");
var CommandService_1 = require("./services/OtherServices/CommandService");
var HelpOption_1 = require("./options/HelpOption");
var SpawnService_1 = require("./services/OtherServices/SpawnService");
var GitCommitGenService_1 = require("./services/GitServices/GitCommitGenService");
var LogService_1 = require("./services/OtherServices/LogService");
exports.Main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var subcommand;
    return __generator(this, function (_a) {
        try {
            subcommand = process.argv[2];
            if (!subcommand) {
                console.log("Gitlestial - Version: " + packageInfo.version);
                console.log("Use gitlestial --help for viewing all the available commands.");
                return [2 /*return*/];
            }
            CommandService_1.CheckIfCommandExists();
            switch (subcommand) {
                case "commit-gen":
                    GitCommitGenService_1.generateCommit();
                    break;
                default:
                    defaultCommand(subcommand);
                    break;
            }
        }
        catch (ex) {
            LogService_1.logInfo(ex.message);
        }
        return [2 /*return*/];
    });
}); };
var defaultCommand = function (subcommand) {
    var help = subcommand.split("--")[1];
    if (help === "help") {
        HelpOption_1.displayHelp();
    }
    else {
        SpawnService_1.spawnProcess("git", process.argv.slice(2, process.argv.length));
        //Passing commands to primitive Git CLI
    }
};
//# sourceMappingURL=index.js.map