import {deferConfig as defer}  from 'config/defer';
import * as path from'path';

export default {
  // secret data can be moved to env variables
  // or a separate config
  my_app: 'koa_node_angular',
  secret:   'mysecret',
  jwtSecret: 'jwtSecret',
  mongoose: {
    uri:     'mongodb://localhost:27017/baza_test_angular',
    options: {
        poolSize:      10
      }
    
  },
  crypto: {
    hash: {
      length:     128,
      // may be slow(!): iterations = 12000 take ~60ms to generate strong password
      iterations: process.env.NODE_ENV == 'production' ? 12000 : 1
    }
  },
  template: {
    // template.root uses config.root
    root: defer(function(cfg) {
      return path.join(cfg.root, 'templates');
    })
  },
  root:     process.cwd()
};
