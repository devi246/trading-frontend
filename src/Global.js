


class Global {
    constructor() {
        this.loginBar = null
        this.server = ""
        this.devServer = "http://localhost:1323"
        this.productionServer = "https://gotrade-k224sx4lwq-ew.a.run.app"

        this.x()
    }



    x() {

		if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
			console.log("GLOBE DEV CODE")
            this.server = this.devServer
		} else {
			console.log("GLOBE PROD CODE")
            this.server = this.productionServer
		}

        console.log("x server", this.server, this.devServer)
    }

}

let Globe = new Global

export default Globe