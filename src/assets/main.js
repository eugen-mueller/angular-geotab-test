function loadApp() {
  return new Promise(resolve => {
    if (typeof geotab !== "undefined") {

        console.log('Staring Addin');
        
        geotab.addin.svr = (elt, service) => {
            'use strict';
             let api = service.api;
             let currentDeviceId, currentDevice;

             service.page.get().then(state => {

                currentDeviceId = state.id;
        
                // Get device
                service.api.call('Get', {
                        typeName: 'Device',
                        search: {
                            id: currentDeviceId
                        }
                    })
                    .then(device => {
                        currentDevice = device[0];
        
                        console.log('Working with device2:', currentDevice);

                        resolve(api);
        
                    })
                    .catch(e => {
        
                        console.error(e);
                        reject();
        
                    });
        
            });
        }

    } else {
      console.error("Cannot create Geotab add-in");
    }

  }); 
  
}
