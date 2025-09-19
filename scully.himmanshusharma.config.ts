// import { ScullyConfig } from '@scullyio/scully';

// export const config: ScullyConfig = {
//   projectRoot: "./src",
//   projectName: "himmanshusharma",
//   outDir: './dist/static',
//   routes: {
//     '/home': { type: 'default' },
//     '/terms': { type: 'default' },
//     '/privacy': { type: 'default' },
//     '/reports': { type: 'default' }
//   }
// };


import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "himmanshusharma",
  outDir: './dist/static',
  routes: {},
  extraRoutes: [
    '/home',
    '/terms',
    '/privacy',
    '/reports'
  ]
};
