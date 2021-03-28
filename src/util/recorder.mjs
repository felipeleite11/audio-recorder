export default class Recorder {
	constructor() {
		this.audioType = 'audio/webm;codecs=opus'	
		this.mediaRecorder = {}
		this.recordedBlobs = []
	}

	_setup() {
		const options = {
			mimeType: this.audioType
		}

		const isSuported = MediaRecorder.isTypeSupported(options.mimeType)

		if(!isSuported) {
			const msg = `The codec ${options.mimeType} is not supported.`

			alert(msg)

			throw new Error(msg)
		}

		return options
	}

	startRecord(stream) {
		const options = this._setup()

		this.mediaRecorder = new MediaRecorder(stream, options)

		this.mediaRecorder.onstop = _ => {
			console.log('Recorded blobs', this.recordedBlobs)
		}

		this.mediaRecorder.ondataavailable = event => {
			if(!event.data || !event.data.size) {
				return
			}

			this.recordedBlobs.push(event.data)
		}

		this.mediaRecorder.start()

		console.log('Record start', this.mediaRecorder)
	}

	async stopRecord() {
		if(this.mediaRecorder.state !== 'recording') {
			return
		}

		this.mediaRecorder.stop()

		console.log('Record stopped')
	}

	getRecordURL() {
		const blob = new Blob(this.recordedBlobs, { type: this.audioType })
		return window.URL.createObjectURL(blob)
	}
}