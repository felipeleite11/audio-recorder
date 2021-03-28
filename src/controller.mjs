export default class Controller {
	constructor({ view, media, recorder }) {
		this.view = view
		this.media = media
		this.recorder = recorder
	}

	static initialize(dependencies) {
		const instance = new Controller(dependencies)

		return instance._init()
	}

	_init() {
		this.view.configureStartRecordButton(this.onStartRecording.bind(this))
		this.view.configureStopRecordButton(this.onStopRecording.bind(this))
	}

	async onStartRecording() {
		const audioStream = await this.media.getAudio()

		try {
			this.recorder.startRecord(audioStream)
		} catch(e) {
			console.log('Codec incompativel')
			await this.onStopRecording(false)
		}
	}

	async onStopRecording(tryPlay = true) {
		this.recorder.stopRecord()

		if(tryPlay) {
			setTimeout(() => {
				const audioURL = this.recorder.getRecordURL()

				this.view.playAudio(audioURL)
			})
		}
	}
}