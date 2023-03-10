import mongoose from 'mongoose';

export const Connection = async (username, password) => {
	const URL = `mongodb://${username}:${password}@ac-oy5neol-shard-00-00.u50gzns.mongodb.net:27017,ac-oy5neol-shard-00-01.u50gzns.mongodb.net:27017,ac-oy5neol-shard-00-02.u50gzns.mongodb.net:27017/Cluster1?ssl=true&replicaSet=atlas-itmhcw-shard-0&authSource=admin&retryWrites=true&w=majority`;
	try {
		await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
		console.log('DataBase Connected');
	} catch (error) {
		console.log(error.message);
	}
};
export default Connection;
