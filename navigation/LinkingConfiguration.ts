import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
          screens: {
            IndexScreen: 'index'
          }
        // screens: {
        //   TabOne: {
        //     screens: {
        //       TabOneScreen: 'one',
        //     },
        //   },
        //   TabTwo: {
        //     screens: {
        //       TabTwoScreen: 'two',
        //     },
        //   },
        // },
      },
      Listing: {
        screens: {
          ListingScreen: 'listing'
        }
      },
      NotFound: '*',
    },
  },
};
