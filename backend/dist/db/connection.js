import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        const url = process.env.MONGODB_URL;
        if (!url) {
            throw new Error("MONGODB_URL is not defined");
        }
        await connect(url);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot Connect To MongoDB");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot Disconnect From MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map