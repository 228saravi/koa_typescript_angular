import * as mongoose from 'mongoose';
import * as config from 'config';
mongoose.Promise = Promise;

if (process.env.MONGOOSE_DEBUG) {
  mongoose.set('debug', true);
}

mongoose.connect(config.mongoose.uri, config.mongoose.options);

export default mongoose;
