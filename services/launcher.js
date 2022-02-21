
const fs = require('fs');
// export a launcher that handles onPrepare, onWorkerStart and onComplete
module.exports = class Launcher {
    async onPrepare(config) {
        console.log("Launcher >>>>>")
    }


    onComplete() {
        //            fs.writeFileSync(.exportParamsFile, "Testing");
    }


}

