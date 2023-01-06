export const presets = { 
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
    "env": {
      "test": {
        "presets": [["env"],]
      }
    }

  };