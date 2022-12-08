
//var geotabAPI;

function loadApp() {
  return new Promise(resolve => {
    if (typeof geotab !== "undefined") {
      geotab.addin.basicAngular = (api, state) => {

        return {
          /**
           * initialize() is called only once when the Add-In is first loaded. Use this function to initialize the
           * Add-In's state such as default values or make API requests (MyGeotab or external) to ensure interface
           * is ready for the user.
           * @param api The GeotabApi object for making calls to MyGeotab.
           * @param state The page state object allows access to URL, page navigation and global group filter.
           * @param initializeCallback Call this when your initialize route is complete. Since your initialize routine
           *        might be doing asynchronous operations, you must call this method when the Add-In is ready
           *        for display to the user.
           */

          initialize: (api, state, initializeCallback) => {
            // The api object exposes a method we can call to get the current user identity. This is useful for
            // determining user context, such as regional settings, language preference and name. Use the api
            // to retrieve the currently logged on user object.

            console.log('Init');
            //geotabAPI = api;
            initializeCallback();


          },
          focus: (api, state) => {
            /**
             * focus() is called whenever the Add-In receives focus.
             *
             * The first time the user clicks on the Add-In menu, initialize() will be called and when completed, focus().
             * focus() will be called again when the Add-In is revisited. Note that focus() will also be called whenever
             * the global state of the MyGeotab application changes, for example, if the user changes the global group
             * filter in the UI.
             *
             * @param api The GeotabApi object for making calls to MyGeotab.
             * @param state The page state object allows access to URL, page navigation and global group filter.
             */

            resolve(api);

            console.log("Focus")

          },
          blur: (api, state) => {
            /**
             * blur() is called whenever the user navigates away from the Add-In.
             *
             * Use this function to save the page state or commit changes to a data store or release memory.
             *
             * @param api The GeotabApi object for making calls to MyGeotab.
             * @param state The page state object allows access to URL, page navigation and global group filter.
             */


            console.log("Blur")

          }
        };
      };
    } else {
      console.error("Cannot create Geotab add-in");
    }
  })
}

//export {loadApp};